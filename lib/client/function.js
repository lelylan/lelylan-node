/**
 * A class to retrieve information about Lelylan Function.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given function identified from its ID.
   * @param {String} id The ID of the desired function.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/functions#get-a-function
   */
  function find(id, callback) {
    core.api('GET', '/functions/' + id, {}, callback);
  }


  /**
   * Retrieve a list of owned functions.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/functions#get-all-functions
   */
  function all(options, callback) {
    core.api('GET', '/functions', options, callback);
  }


  /**
   * Create a function and returns extended information for it.
   * @param {Object} [params] An object containing the function params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/functions#create-a-functions
   */
  function create(params, callback) {
    core.api('POST', '/functions', params, callback);
  }


  /**
   * Update a function identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired function.
   * @param {Object} [params] An object containing the function params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/functions#update-a-functions
   */
  function update(id, params, callback) {
    core.api('PUT', '/functions/' + id, params, callback);
  }


  /**
   * Delete a function identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired function.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/functions#delete-a-functions
   */
  function destroy(id, callback) {
    core.api('DELETE', '/functions/' + id, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
