/**
 * A class to retrieve information about Lelylan Device.
 * @param {Object} config A valid configuration.
 */
module.exports = function(config) {

  var core = require('./../core')(config);

  /**
   * Returns extended information for a given device identified from its ID.
   * @param {String} id The ID of the desired device.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#get-a-device
   */
  function find(id, callback) {
    core.api('GET', '/devices/' + id, {}, callback);
  }


  /**
   * Returns private information for a given device identified from its ID
   * @param {String} id The ID of the desired device.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#get-a-device-private-info
   */
  function privates(id, callback) {
    core.api('GET', '/devices/' + id + '/privates', {}, callback);
  }


  /**
   * Retrieve a list of owned devices.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#get-all-devices
   */
  function all(options, callback) {
    core.api('GET', '/devices', options, callback);
  }


  /**
   * Create a device and returns extended information for it.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#create-a-devices
   */
  function create(params, callback) {
    core.api('POST', '/devices', params, callback);
  }


  /**
   * Update a device identified from its ID and returns extended information for it
   * @param {String} id The ID of the desired device.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#update-a-devices
   */
  function update(id, params, callback) {
    core.api('PUT', '/devices/' + id, params, callback);
  }


  /**
   * Delete a device identified from its ID and return extended information for it.
   * @param {String} id The ID of the desired device.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#delete-a-devices
   */
  function destroy(id, callback) {
    core.api('DELETE', '/devices/' + id, {}, callback);
  }


  /**
   * Update properties on a device identified from its ID and returns extended representation for
   * it. If a physical device is connected, Lelylan forward the changes to the physical world.
   * @param {String} id The ID of the desired device.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#update-properties
   */
  function properties(id, params, callback) {
    core.api('PUT', '/devices/' + id + '/properties', params, callback);
  }


  /**
   * Execute a function on a device identified from its ID and returns extended representation for
   * it. If a physical device is connected, Lelylan forward the changes to the physical world.
   * @param {String} id The ID of the desired device.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#execute-a-function
   */
  function execute(id, params, callback) {
    core.api('PUT', '/devices/' + id + '/functions', params, callback);
  }


  /**
   * Activate a device and returns extended information for it.
   * @param {String} activation_code Device activation code.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices/activations#activate-a-device
   */
  function activate(activation_code, callback) {
    core.api('POST', '/activations/' + activation_code, {}, callback);
  }


  /**
   * Execute a function on a device identified from its ID and returns extended representation for
   * it. If a physical device is connected, Lelylan forward the changes to the physical world.
   * @param {String} id The ID of the desired device.
   * @param {Object} [params] An object containing the device params. Refer to dev center documentation.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see http://dev.lelylan.com/api/devices#deactivate-a-device
   */
  function deactivate(activation_code, callback) {
    core.api('DELETE', '/activations/' + activation_code, {}, callback);
  }


  return {
    'all' : all,
    'find' : find,
    'privates': privates,
    'create': create,
    'update': update,
    'delete': destroy,
    'properties': properties,
    'execute': execute,
    'activate': activate,
    'deactivate': deactivate
  }
};
