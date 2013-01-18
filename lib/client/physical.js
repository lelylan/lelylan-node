//
// A class to retrieve information about physical devices.
//
module.exports = function(config) {

  var core    = require('./../core')(config),
      request = require('request'),
	    uuid    = require('node-uuid');

  // ###PUT physical-device-uri
  //
  // Update properties on a physical device identified from its URI.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/physicals#receiving-property-updates)
	//
  // * `uri` - A String that represents the uri of the physical device.
  // * `params` - An object containing the device properties. [See accepted params](http://dev.lelylan.com/api/physicals#receiving-property-updates)
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function properties(uri, secret, params, callback) {
		if (!params.nonce) params['nonce'] = uuid.v4()
    var options = { uri: uri, method: 'PUT', json: params, headers: { 'X-Physical-Signature': core.signature(secret, params) } }

    if (process.env.DEBUG) console.log('Lelylan Node: Making the HTTP request', options)

		request(options, function(error, response, body) {
      core.data(error, response, body, callback);
		})
  }


  return {
    'properties': properties
  }
};
