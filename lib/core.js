var exports   = module.exports,
    request   = require('request');

var emptyCallback = function() { };


/**
 * Construct the Core module.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {


  // Shared function to call the API
  function callApi(method, path, params, callback) {

    if(!callback || typeof(callback) !== 'function') {
      throw new Error('Callback not provided on API call');
    }

		if (process.env.DEBUG) console.log('Lelylan Node Request');
    var url = config.endpoint + path;

    retrieve(method, url, params, function(error, response, body) {
      extractData(error, response, body, callback);
    });
  }


  // Make the HTTP request
  function retrieve(method, url, params, callback) {

    var options = { uri: url, method: method, headers: { 'Authorization': 'Bearer ' + config.token } }
    method == 'GET' ? options.json = params : options.qs = params

    if (process.env.DEBUG) console.log('Lelylan Node: Making the HTTP request', options)
    request(options, callback)
  }


  // Extract the body from the response
  function extractData(error, response, body, callback) {

		if (error) { throw new Error('Lelylan Node: something went worng during the request'); }
		if (process.env.DEBUG) console.log('Lelylan Node: checking response body', body);

    try { body = JSON.parse(body); }
    catch(e) {
      body = {
        "status": response.statusCode,
        "request": response.request.uri.href,
        "error": {
          "code": "notifications.service.not_working",
          "description": "Lelylan is not working correctly (we are investigating)."
        }
      }
    }

    callback(error, body);
  }


  return {
    'retrieve'    : retrieve,
    'extractData' : extractData,
    'callApi'     : callApi
  }
};
