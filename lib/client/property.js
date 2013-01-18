/**
 * A class to retrieve information about Lelylan Property.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given property identified from its ID.
   * @param {String} id The ID of the desired property.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#get-a-property
   */
  function find(id, callback) {
    core.api('GET', '/properties/' + id, {}, callback);
  }


  /**
   * Returns private information for a given property identified from its ID
   * @param {String} id The ID of the desired property.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#get-a-property-private-info
   */
  function privates(id, callback) {
    core.api('GET', '/properties/' + id + '/privates', {}, callback);
  }


  /**
   * Retrieve a list of owned properties.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#get-all-properties
   */
  function all(options, callback) {
    core.api('GET', '/properties', options, callback);
  }


  /**
   * Create a property and returns extended information for it.
   * @param {Object} [params] An object containing the property params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#create-a-properties
   */
  function create(params, callback) {
    core.api('POST', '/properties', params, callback);
  }


  /**
   * Update a property identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired property.
   * @param {Object} [params] An object containing the property params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#update-a-properties
   */
  function update(id, params, callback) {
    core.api('PUT', '/properties/' + id, params, callback);
  }


  /**
   * Delete a property identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired property.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/properties#delete-a-properties
   */
  function destroy(id, callback) {
    core.api('DELETE', '/properties/' + id, {}, callback);
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
