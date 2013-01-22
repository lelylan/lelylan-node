//
// A class to retrieve information about Lelylan properties.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /properties/:id
  //
  // Returns extended information for a given property identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/properties#get-a-property).
	//
  // * `id` - A String that represents the ID of the desired property.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/properties/' + id, {}, callback);
  }

  // ###GET /properties
  //
  // Retrieve a list of owned properties.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/properties#get-all-properties).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types/properties#get-all-properties).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/properties', options, callback);
  }

  // ###POST /properties
  //
  // Create a property and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/properties#create-a-property).
	//
  // * `params` - An object containing the property params. [See accepted params](http://dev.lelylan.com/api/types/properties#create-a-property).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/properties', params, callback);
  }

  // ###PUT /properties/:id
  //
  // Update a property identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/properties#update-a-property).
	//
  // * `id` - A String that represents the ID of the desired property
  // * `params` - An object containing the property params. [See accepted params](http://dev.lelylan.com/api/types/properties#update-a-property).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/properties/' + id, params, callback);
  }

  // ###DELETE /properties/:id
  //
  // Delete a property identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types/properties#delete-a-property).
	//
  // * `id` - A String that represents the ID of the desired property.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/properties/' + id, {}, callback);
  }

  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};

