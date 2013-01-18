//
// A class to retrieve information about Lelylan Histories.
//
module.exports = function(config) {

  var core = require('./../core')(config);


  // ###GET /histories/:id
  //
  // Returns extended information for a given history identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices/histories#get-a-history).
	//
  // * `id` - A String that represents the ID of the desired history.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/histories/' + id, {}, callback);
  }

  // ###GET /histories
  //
  // Retrieve a list of owned histories.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/devices/histories#get-all-info).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/histories#get-all-info).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/histories', options, callback);
  }


  return {
    'all' : all,
    'find' : find
  }
};
