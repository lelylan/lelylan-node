var exports   = module.exports,
    qs        = require('querystring'),
    util      = require('util'),
    http      = require('http'),
    urlParser = require('url'),
    request   = require('request');
    winston   = require('winston');

var emptyCallback = function() { };


/**
 * Construct the Core module.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var logger = getLogger('core');


  // Make the HTTP request
  function retrieve(url, accessToken, params, callback, method) {

    var options = {
      uri: url,
      method: method,
      json: params,
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      }
    }

    console.log('LELY - Making the HTTP request', options)
    request(options, callback)
  }


  // Extract the body from the response
  function extractData(url, status, result, callback) {

		console.log('LELY - status', status);
		console.log('LELY - result', result);

    var json = {};
    callback = callback || emptyCallback;

    if (status !== undefined && result !== undefined) {
      try { json = JSON.parse(result); }
      catch(e) { callback(e); return; }

      if (status >= 500) {
        json.response = {
          "status": json.status,
          "request": url,
          "error": {
            "code": "notifications.service.not_available",
            "description": "Lelylan seems to have some problems. Coming back soon."
          }
        }
      }

      if (json.response !== undefined) { callback(null, json.response); }
      else { callback(null, {}); }
    }
    else {
      logger.error('There was an unexpected, fatal error calling Lelylan: the response was undefined or had no status code.');
      callback(new Error('Lelylan had no response or status code.'));
    }
  }


  // Shared function to call the API
  function callApi(path, accessToken, params, callback, method) {
    if(!callback || typeof(callback) !== 'function') {
      logger.error('Callback not provided on API call.');
      throw new Error('Callback not provided on API call');
    }

    var url = config.lelylan.apiUri + path;
		console.log('LELY - Created URL', url);

    retrieve(url, accessToken, params, function(error, status, result) {
      extractData(url, status, result, callback);
    }, method);
  }


  // Get the logger
  function getLogger(name) {
    if(!winston.loggers.has(name)) {
      var logger = winston.loggers.add(name, getLoggerSettings(name));
      logger.setLevels(config.winston.levels);
    }
    return winston.loggers.get(name);
  }


  // Configure logger
  function getLoggerSettings(name) {
    var settings = config.winston.loggers[name] || config.winston.loggers.default;

    if(!settings) {
      logger.error('No settings exist for \'' + name + '\', nor is there a default. Update your configuration.');
      settings = config.winston.loggers['default'] = { 'console': { 'level': 'warn' } }
    }

    for(var setting in settings) {
      settings[setting]['label'] = 'node-lelylan:' + name;
      settings[setting]['colorize'] = true;
    }

    return settings;
  }


  return {
    'getLogger'   : getLogger,
    'retrieve'    : retrieve,
    'extractData' : extractData,
    'callApi'     : callApi
  }
};
