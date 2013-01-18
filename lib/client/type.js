/**
 * A class to retrieve information about Lelylan Type.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given type identified from its ID.
   * @param {String} id The ID of the desired type.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#get-a-type
   */
  function find(id, callback) {
    core.api('GET', '/types/' + id, {}, callback);
  }


  /**
   * Returns private information for a given type identified from its ID
   * @param {String} id The ID of the desired type.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#get-a-type-private-info
   */
  function privates(id, callback) {
    core.api('GET', '/types/' + id + '/privates', {}, callback);
  }


  /**
   * Retrieve a list of owned types.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#get-all-types
   */
  function all(options, callback) {
    core.api('GET', '/types', options, callback);
  }


  /**
   * Create a type and returns extended information for it.
   * @param {Object} [params] An object containing the type params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#create-a-types
   */
  function create(params, callback) {
    core.api('POST', '/types', params, callback);
  }


  /**
   * Update a type identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired type.
   * @param {Object} [params] An object containing the type params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#update-a-types
   */
  function update(id, params, callback) {
    core.api('PUT', '/types/' + id, params, callback);
  }


  /**
   * Delete a type identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired type.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/types#delete-a-types
   */
  function destroy(id, callback) {
    core.api('DELETE', '/types/' + id, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'privates': privates,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
