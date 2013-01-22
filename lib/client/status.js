//
// A class to retrieve information about Lelylan statuses.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /statuses/:id
  //
  // Returns extended information for a given status identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/statuses#get-a-status).
	//
  // * `id` - A String that represents the ID of the desired status.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/statuses/' + id, {}, callback);
  }

  // ###GET /statuses
  //
  // Retrieve a list of owned statuses.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/statuses#get-all-statuses).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types/statuses#get-all-statuses).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/statuses', options, callback);
  }

  // ###POST /statuses
  //
  // Create a status and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/statuses#create-a-status).
	//
  // * `params` - An object containing the status params. [See accepted params](http://dev.lelylan.com/api/types/statuses#create-a-status).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/statuses', params, callback);
  }

  // ###PUT /statuses/:id
  //
  // Update a status identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/statuses#update-a-status).
	//
  // * `id` - A String that represents the ID of the desired status
  // * `params` - An object containing the status params. [See accepted params](http://dev.lelylan.com/api/types/statuses#update-a-status).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/statuses/' + id, params, callback);
  }

  // ###DELETE /statuses/:id
  //
  // Delete a status identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/statuses#delete-a-status).
	//
  // * `id` - A String that represents the ID of the desired status.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
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

