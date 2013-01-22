//
// A class to retrieve information about Lelylan types.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /types/:id
  //
  // Returns extended information for a given type identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#get-a-type).
	//
  // * `id` - A String that represents the ID of the desired type.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/types/' + id, {}, callback);
  }

  // ###GET /types
  //
  // Retrieve a list of owned types.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#get-all-types).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types#get-all-types).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/types', options, callback);
  }

  // ###POST /types
  //
  // Create a type and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#create-a-type).
	//
  // * `params` - An object containing the type params. [See accepted params](http://dev.lelylan.com/api/types#create-a-type).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/types', params, callback);
  }

  // ###PUT /types/:id
  //
  // Update a type identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#update-a-type).
	//
  // * `id` - A String that represents the ID of the desired type
  // * `params` - An object containing the type params. [See accepted params](http://dev.lelylan.com/api/types#update-a-type).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/types/' + id, params, callback);
  }

  // ###DELETE /types/:id
  //
  // Delete a type identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#delete-a-type).
	//
  // * `id` - A String that represents the ID of the desired type.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/types/' + id, {}, callback);
  }

  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};
