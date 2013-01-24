var exports = module.exports,
    request = require('request'),
    crypto  = require('crypto'),
    util    = require("util");


module.exports = function(config) {

  // API call
  function api(method, path, params, callback) {

    if(!callback || typeof(callback) !== 'function') {
      throw new Error('Callback not provided on API call');
    }

    if (process.env.DEBUG) console.log('Lelylan Node Request');
    var url = config.endpoint + path;

		// If the token is expired we ask for a new one, otherwise makes the request
		if (config.token && config.token.expired()) {
			config.token.refresh(function(error, result) {
				config.token = result;
				api(method, path, params, callback);
			});
		} else {
			call(method, url, params, function(error, response, body) {
				data(error, response, body, callback);
			});
		}
  }


  // Make the HTTP request
  function call(method, url, params, callback) {

    var options = { uri: url, method: method }

    if (url.match(/subscriptions/)) {
      if (config.client) options.headers = { 'Authorization': 'Basic ' + new Buffer(config.client.id + ':' + config.client.secret).toString('base64') }
    } else {
      if (config.token) options.headers = { 'Authorization': 'Bearer ' + config.token.token.access_token }
    }

    options.json = true; // make the JSON response being parsed

    if (isEmpty(params)) params = null;
    method == 'GET' ? options.qs = params : options.json = params

    if (process.env.DEBUG) console.log('Lelylan Node: Making the HTTP request', options)
    request(options, callback)
  }


  // Extract the data from the request response
  function data(error, response, body, callback) {

    if (error) throw new Error('Lelylan Node: something went worng during the request');
    if (process.env.DEBUG) console.log('Lelylan Node: checking response body', body);

    // Hack needed as it does not parse DELETE requests in JSON
    try      { body = JSON.parse(body); }
    catch(e) { }

    if (response.statusCode >= 500) { body = errorResponse(response); }
    if (response.statusCode >= 400) return callback(new HTTPError(body), null)

    callback(error, body);
  }


  // 500 Error response
  function errorResponse(response) {
    return { "status": response.statusCode,
      "request": response.request.uri.href,
      "error": {
        "code": "notifications.service.not_working",
        "description": "Lelylan is not working correctly (we are investigating)."
      }
    }
  }


  // Used for physical device and realtime communication
  function signature(secret, content) {
    var digest = crypto.createHmac("sha1", secret);
    digest.update(JSON.stringify(content));
    return digest.digest('hex')
  }


  // personalized errror
  function HTTPError(message) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = message;
  } HTTPError.prototype.__proto__ = Error.prototype;


  function isEmpty(ob){
    for(var i in ob){ return false;}
    return true;
  }


  return {
    'call': call,
    'data': data,
    'api': api,
    'signature': signature,
  }
};
