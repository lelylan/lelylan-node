var exports   = module.exports,
request   = require('request');

var emptyCallback = function() { };


/**
 * Construct the Core module.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {


  // Shared function to call the API
  function api(method, path, params, callback) {

    if(!callback || typeof(callback) !== 'function') {
      throw new Error('Callback not provided on API call');
    }

    if (process.env.DEBUG) console.log('Lelylan Node Request');
    var url = config.endpoint + path;

    call(method, url, params, function(error, response, body) {
      data(error, response, body, callback);
    });
  }


  // Make the HTTP request
  function call(method, url, params, callback) {

    var options = { uri: url, method: method, headers: { 'Authorization': 'Bearer ' + config.token } }

    if (isEmpty(params)) params = null;
    method == 'GET' ? options.json = params : options.qs = params

    if (process.env.DEBUG) console.log('Lelylan Node: Making the HTTP request', options)
      request(options, callback)
  }


  function data(error, response, body, callback) {

    if (error) { throw new Error('Lelylan Node: something went worng during the request'); }
    if (process.env.DEBUG) console.log('Lelylan Node: checking response body', body);

    try      { body = JSON.parse(body); }
    catch(e) { body = errorResponse(response) }

    callback(error, body);
  }


  function errorResponse(response) {
    return { "status": response.statusCode,
      "request": response.request.uri.href,
      "error": {
        "code": "notifications.service.not_working",
        "description": "Lelylan is not working correctly (we are investigating)."
      }
    }
  }


  function isEmpty(ob){
    for(var i in ob){ return false;}
    return true;
  }


  return {
    'call' : call,
    'data' : data,
    'api'  : api
  }
};