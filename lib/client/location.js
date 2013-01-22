//
// A class to retrieve information about Lelylan locations.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /locations/:id
  //
  // Returns extended information for a given location identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/locations#get-a-location).
	//
  // * `id` - A String that represents the ID of the desired location.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/locations/' + id, {}, callback);
  }

  // ###GET /locations
  //
  // Retrieve a list of owned locations.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/locations#get-all-locations).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/locations#get-all-locations).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/locations', options, callback);
  }

  // ###POST /locations
  //
  // Create a location and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/locations#create-a-location).
	//
  // * `params` - An object containing the location params. [See accepted params](http://dev.lelylan.com/api/locations#create-a-location).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/locations', params, callback);
  }

  // ###PUT /locations/:id
  //
  // Update a location identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/locations#update-a-location).
	//
  // * `id` - A String that represents the ID of the desired location
  // * `params` - An object containing the location params. [See accepted params](http://dev.lelylan.com/api/locations#update-a-location).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/locations/' + id, params, callback);
  }

  // ###DELETE /locations/:id
  //
  // Delete a location identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/locations#delete-a-location).
	//
  // * `id` - A String that represents the ID of the desired location.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/locations/' + id, {}, callback);
  }

  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};

