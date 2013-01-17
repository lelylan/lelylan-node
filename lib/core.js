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
  function retrieve(url, params, callback, method) {

    var options = {
      uri: url,
      method: method,
      json: params,
      headers: { 'Authorization': 'Bearer ' + config.token }
    }

    console.log('Lelylan Node: Making the HTTP request', options)
    request(options, callback)
  }


  // Extract the body from the response
  function extractData(error, response, body, callback) {
    var json;

		if (error) { throw new Error('Lelylan Node: something went worng during the request'); }

		console.log('Lelylan Node: checking response body', body);

    // If Lelylan does not return a json we give a generic 500 error.
    // We should add a more glanular error definition for all 5xx family.
    if (response.statusCode >= 500) {
      body = {
        "status": response.statusCode,
        "request": response.request.uri.href,
        "error": {
          "code": "notifications.service.not_working",
          "description": "Lelylan not working correctly (we are investigating)."
        }
      }
    }

    callback(body);
  }


  // Shared function to call the API
  function callApi(path, params, callback, method) {

    if(!callback || typeof(callback) !== 'function') {
      logger.error('Callback not provided on API call.');
      throw new Error('Callback not provided on API call');
    }

		console.log('Lelylan Node: making the request');
    var url = config.lelylan.apiUri + path;

    retrieve(url, params, function(error, response, body) {
      extractData(error, response, body, callback);
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
