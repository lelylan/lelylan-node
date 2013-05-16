//
// A class to retrieve information about Lelylan Categories.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ### GET /categories
  //
  // Retrieve a list of owned categories.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/types#categories).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/types#categories).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/categories', options, callback);
  }


  return {
    'all' : all,
  }
};
