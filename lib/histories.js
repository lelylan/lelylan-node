/**
 * A class to retrieve information about Lelylan Histories
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./core')(config);

  /**
   * Returns extended information for a given history identified from its ID
   * @param {String} id The ID of the desired history.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices/histories#get-a-history
   */
  function find(id, callback) {
    core.api('GET', '/histories/' + id, {}, callback);
  }


  /**
   * Returns a list of history resources related to owned devices.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices/histories#get-all-histories
   */
  function all(options, callback) {
    core.api('GET', '/histories', options, callback);
  }


  return {
    'all' : all,
    'find' : find
  }
};
