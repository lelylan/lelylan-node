//
// A class to retrieve information about Lelylan subscriptions.
//
module.exports = function(config) {

  var core = require('./../core')(config);

  // ###GET /subscriptions/:id
  //
  // Returns extended information for a given subscription identified from its ID.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/subscriptions#get-a-subscription).
	//
  // * `id` - A String that represents the ID of the desired subscription.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function find(id, callback) {
    core.api('GET', '/subscriptions/' + id, {}, callback);
  }

  // ###GET /subscriptions
  //
  // Retrieve a list of owned subscriptions.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/subscriptions#get-all-info).
	//
  // * `options` - An object containing the search params. [See accepted params](http://dev.lelylan.com/api/subscriptions#get-all-info).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function all(options, callback) {
    core.api('GET', '/subscriptions', options, callback);
  }

  // ###POST /subscriptions
  //
  // Create a subscription and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/subscriptions#create-a-subscription).
	//
  // * `params` - An object containing the subscription params. [See accepted params](http://dev.lelylan.com/api/subscriptions#create-a-subscription).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function create(params, callback) {
    core.api('POST', '/subscriptions', params, callback);
  }

  // ###PUT /subscriptions/:id
  //
  // Update a subscription identified from its ID and returns extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/subscriptions#update-a-subscription).
	//
  // * `id` - A String that represents the ID of the desired subscription
  // * `params` - An object containing the subscription params. [See accepted params](http://dev.lelylan.com/api/subscriptions#update-a-subscription).
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function update(id, params, callback) {
    core.api('PUT', '/subscriptions/' + id, params, callback);
  }

  // ###DELETE /subscriptions/:id
  //
  // Delete a subscription identified from its ID and return extended information for it.
  // [Learn more on Dev Center](http://dev.lelylan.com/api/subscriptions#delete-a-subscription).
	//
  // * `id` - A String that represents the ID of the desired subscription.
  // * `callback` - The callback function returning the results.
	// An error object is passed as first argument and the result as last.
	//
  function destroy(id, callback) {
    core.api('DELETE', '/subscriptions/' + id, {}, callback);
  }

  return {
    'all' : all,
    'find' : find,
    'create': create,
    'update': update,
    'delete': destroy
  }
};

