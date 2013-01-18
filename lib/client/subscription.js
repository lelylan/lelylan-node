/**
 * A class to retrieve information about Lelylan Subscription.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given subscription identified from its ID.
   * @param {String} id The ID of the desired subscription.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#get-a-subscription
   */
  function find(id, callback) {
    core.api('GET', '/subscriptions/' + id, {}, callback);
  }


  /**
   * Returns private information for a given subscription identified from its ID
   * @param {String} id The ID of the desired subscription.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#get-a-subscription-private-info
   */
  function privates(id, callback) {
    core.api('GET', '/subscriptions/' + id + '/privates', {}, callback);
  }


  /**
   * Retrieve a list of owned subscriptions.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#get-all-subscriptions
   */
  function all(options, callback) {
    core.api('GET', '/subscriptions', options, callback);
  }


  /**
   * Create a subscription and returns extended information for it.
   * @param {Object} [params] An object containing the subscription params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#create-a-subscriptions
   */
  function create(params, callback) {
    core.api('POST', '/subscriptions', params, callback);
  }


  /**
   * Update a subscription identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired subscription.
   * @param {Object} [params] An object containing the subscription params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#update-a-subscriptions
   */
  function update(id, params, callback) {
    core.api('PUT', '/subscriptions/' + id, params, callback);
  }


  /**
   * Delete a subscription identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired subscription.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/subscriptions#delete-a-subscriptions
   */
  function destroy(id, callback) {
    core.api('DELETE', '/subscriptions/' + id, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
