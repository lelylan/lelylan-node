//
// A class to retrieve information about Lelylan functions.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /functions/:id
  //
  // Returns extended information for a given function identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#get-a-function).
	//
  // * `id` - A String that represents the ID of the desired function.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/functions/' + id, {}, callback);
  }

  // ###GET /functions
  //
  // Retrieve a list of owned functions.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#get-all-functions).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types/functions#get-all-functions).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/functions', options, callback);
  }

  // ###GET /functions/public
  //
  // Retrieve a list of all existing functions.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#get-all-functions).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types/functions#get-all-functions).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function public(options, callback) {
    core.api('GET', '/functions/public', options, callback);
  }

  // ###POST /functions
  //
  // Create a function and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#create-a-function).
	//
  // * `params` - An object containing the function params. [See accepted params](http://dev.lelylan.com/api/types/functions#create-a-function).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/functions', params, callback);
  }

  // ###PUT /functions/:id
  //
  // Update a function identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#update-a-function).
	//
  // * `id` - A String that represents the ID of the desired function
  // * `params` - An object containing the function params. [See accepted params](http://dev.lelylan.com/api/types/functions#update-a-function).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/functions/' + id, params, callback);
  }

  // ###DELETE /functions/:id
  //
  // Delete a function identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/functions#delete-a-function).
	//
  // * `id` - A String that represents the ID of the desired function.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/functions/' + id, {}, callback);
  }

  return {
    'all'   : all,
    'public': public,
    'find'  : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};

