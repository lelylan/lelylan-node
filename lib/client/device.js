//
// A class to retrieve information about Lelylan Devices.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /devices/:id
  //
  // Returns extended information for a given device identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#get-a-device).
	//
  // * `id` - A String that represents the ID of the desired device.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/devices/' + id, {}, callback);
  }

  // ###GET /devices/:id/privates
  //
  // Returns private information for a given device identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#get-a-device-private-info).
	//
  // * `id` - A String that represents the ID of the desired device.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function privates(id, callback) {
    core.api('GET', '/devices/' + id + '/privates', {}, callback);
  }

  // ###GET /devices
  //
  // Retrieve a list of owned devices.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#get-all-devices).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/devices#get-all-devices).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/devices', options, callback);
  }

  // ###POST /devices
  //
  // Create a device and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#create-a-device).
	//
  // * `params` - An object containing the device params. [See accepted params](http://dev.lelylan.com/api/devices#create-a-device).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/devices', params, callback);
  }

  // ###PUT /devices/:id
  //
  // Update a device identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#update-a-device).
	//
  // * `id` - A String that represents the ID of the desired device
  // * `params` - An object containing the device params. [See accepted params](http://dev.lelylan.com/api/devices#update-a-device).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/devices/' + id, params, callback);
  }

  // ###DELETE /devices/:id
  //
  // Delete a device identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#delete-a-device).
	//
  // * `id` - A String that represents the ID of the desired device.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/devices/' + id, {}, callback);
  }

  // ###PUT /devices/:id/properties
  //
  // Update properties on a device identified from its ID and returns extended representation for
  // it. If a physical device is connected, Lelylan forward the changes to the physical world.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#update-properties).
	//
  // * `id` - A String that represents the ID of the desired device.
  // * `params` - An object containing the device properties. [See accepted params](http://dev.lelylan.com/api/devices#update-properties)
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function properties(id, params, callback) {
    core.api('PUT', '/devices/' + id + '/properties', params, callback);
  }

  // ###PUT /devices/:id/functions
  //
  // Execute a function on a device identified from its ID and returns extended representation for
  // it. If a physical device is connected, Lelylan forward the changes to the physical world.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices#execute-a-function).
	//
  // * `id` - A String that represents the ID of the desired device.
  // * `params` - An object containing the device properties. [See accepted params](http://dev.lelylan.com/api/devices#execute-a-function).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function execute(id, params, callback) {
    core.api('PUT', '/devices/' + id + '/functions', params, callback);
  }

  // ###POST /activations/:activation_code
  //
  // Activate a device and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices/activations#activate-a-device).
	//
  // * `params.activation_code` - A String that represents the device activation code.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function activate(params, callback) {
    core.api('POST', '/activations', params, callback);
  }

  // ###DELETE /activations/:activation_code
  //
  // Deactivate a device and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices/activations#deactivate-a-device).
	//
  // * `activation_code` - A String that represents the device activation code.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
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
