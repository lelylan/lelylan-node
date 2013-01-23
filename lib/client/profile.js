//
// A class to retrieve information about authenticated user.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /me
  //
  // Returns extended information for the authenticated user.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/core#user-profile).
	//
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function me(callback) {
    core.api('GET', '/me', {}, callback);
  }


  return {
    'me' : me
  }
};
