/**
 * A class to retrieve information about Lelylan Status.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given status identified from its ID.
   * @param {String} id The ID of the desired status.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/statuses#get-a-status
   */
  function find(id, callback) {
    core.api('GET', '/statuses/' + id, {}, callback);
  }


  /**
   * Retrieve a list of owned statuses.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/statuses#get-all-statuses
   */
  function all(options, callback) {
    core.api('GET', '/statuses', options, callback);
  }


  /**
   * Create a status and returns extended information for it.
   * @param {Object} [params] An object containing the status params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/statuses#create-a-statuses
   */
  function create(params, callback) {
    core.api('POST', '/statuses', params, callback);
  }


  /**
   * Update a status identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired status.
   * @param {Object} [params] An object containing the status params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/statuses#update-a-statuses
   */
  function update(id, params, callback) {
    core.api('PUT', '/statuses/' + id, params, callback);
  }


  /**
   * Delete a status identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired status.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/statuses#delete-a-statuses
   */
  function destroy(id, callback) {
    core.api('DELETE', '/statuses/' + id, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
