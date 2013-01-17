/**
 * A class to retrieve information about Devices from Lelylan.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core   = require('./core')(config);


  /**
   * Retrieve a list of owned devices.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see https://dev.lelylan.com/api/devices#get-all-devices
   */
  function all(callback) {
    console.log('Lelylan Node: GET /devices');
    core.callApi('GET', '/devices', null, callback);
  }


  return {
    'all' : all
  }
};
