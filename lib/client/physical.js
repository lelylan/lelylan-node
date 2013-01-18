/**
 * A class to retrieve information about Lelylan Device.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core    = require('./../core')(config),
      request = require('request'),
	    uuid    = require('node-uuid');


  /**
   * Update properties on a physical device identified from its URI.
   * @param {String} uri The URI of the desired physical device.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/physicals#receiving-property-updates
   */
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
