/**
 * A class to retrieve information about Lelylan Location.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given location identified from its ID.
   * @param {String} id The ID of the desired location.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#get-a-location
   */
  function find(id, callback) {
    core.api('GET', '/locations/' + id, {}, callback);
  }


  /**
   * Returns private information for a given location identified from its ID
   * @param {String} id The ID of the desired location.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#get-a-location-private-info
   */
  function privates(id, callback) {
    core.api('GET', '/locations/' + id + '/privates', {}, callback);
  }


  /**
   * Retrieve a list of owned locations.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#get-all-locations
   */
  function all(options, callback) {
    core.api('GET', '/locations', options, callback);
  }


  /**
   * Create a location and returns extended information for it.
   * @param {Object} [params] An object containing the location params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#create-a-locations
   */
  function create(params, callback) {
    core.api('POST', '/locations', params, callback);
  }


  /**
   * Update a location identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired location.
   * @param {Object} [params] An object containing the location params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#update-a-locations
   */
  function update(id, params, callback) {
    core.api('PUT', '/locations/' + id, params, callback);
  }


  /**
   * Delete a location identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired location.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/locations#delete-a-locations
   */
  function destroy(id, callback) {
    core.api('DELETE', '/locations/' + id, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
