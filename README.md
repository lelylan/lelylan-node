# Lelylan API for Node.js

Node.js client library for [Lelylan API](http://dev.lelylan.com)


## Requirements

Node client library is tested against Node ~0.8.x


## Installation

Install the client library using [npm](http://npmjs.org/):

      $ npm install github

Install the client library using git:

      $ git clone git://github.com/lelylan/lelylan-node.git
      $ cd lelylan-node
      $ npm install


## Documentation

* [Lelylan API](http://dev.lelylan.com)


## Getting started

### Create the Lelylan client.

Before calling Lelylan APIs you need to set the access token.
To get an access token use libraries such as [node-oauth](https://github.com/ciaranj/node-oauth).

		Lelylan = require('./../lib/lelylan-node.js')({ token: token });

Lelylan support [three OAuth2 authorization flows](http://dev.lelylan.com/api/oauth).


### Examples

Like in Node.JS, callbacks are always the last argument. If the functions fails an
error object is passed as first argument to the callback.

  	// Get all devices
	  Lelylan.Devices.all(function(error, response) {
      console.log(response)
		})

The response is an Object representing the resource body.


## More examples

For more examples check out the [Lelylan Dev Center](http://dev.lelylan.com#language=node)
examples in Node.

* [Device examples](docs/Lelylan/Client/Devices)
* [Consumption examples](docs/Lelylan/Client/Consumptions)
* [Hisotry examples](docs/Lelylan/Client/Histories)
* [Types examples](docs/Lelylan/Client/Types)
* [Properties examples](docs/Lelylan/Client/Properties)
* [Functions examples](docs/Lelylan/Client/Functions)
* [Statuses examples](docs/Lelylan/Client/Statuses)
* [Categories examples](docs/Lelylan/Client/Categories)
* [Locations examples](docs/Lelylan/Client/Locations)


## Settings

### API endpoint

Configuration block.

  options = { 'endpoint' : 'http://localhost:8000' }
	Lelylan = require('./../lib/lelylan-node.js')(options);


## Errors

Exceptions are raised when a 4xx or 5xx status code is returned.

    // TODO


Through the error message attribute you can access the error information.

    // TODO

Learn more about the [error response structure](http://dev.lelylan.com/rest/core#errors).


## Contributing

Fork the repo on github and send a pull requests with topic branches. Do not forget to
provide specs to your contribution.


### Running specs

* Fork and clone the repository.
* Run `npm install` for dependencies.
* Run `npm test` to execute all specs.


## Coding guidelines

Follow [github](https://github.com/styleguide/) guidelines.


## Feedback

Use the [issue tracker](http://github.com/lelylan/lelylan-node/issues) for bugs.
[Mail](mailto:touch@lelylan.com) or [Tweet](http://twitter.com/lelylan) us for any idea that can improve the project.


## Links

* [GIT Repository](http://github.com/lelylan/lelylan-node)
* [Lelylan Dev Center](http://dev.lelylan.com)
* [Lelylan Site](http://lelylan.com)


## Authors

[Andrea Reginato](http://twitter.com/andreareginato)


## Contributors

Special thanks to the following people for submitting patches.


## Changelog

See [CHANGELOG](people/blob/master/CHANGELOG.md)


## Copyright

Copyright (c) 2013 [Lelylan](http://lelylan.com). See [LICENSE](people/blob/master/LICENSE.md) for details.
