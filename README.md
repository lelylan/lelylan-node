# Lelylan API for Node.js

Node.js client library for [Lelylan API](http://dev.lelylan.com)


## Requirements

Node client library is tested against Node ~0.8.x


## Installation

Install the client library using [npm](http://npmjs.org/):

    $ npm install lelylan-node

Install the client library using git:

    $ git clone git://github.com/lelylan/lelylan-node.git
    $ cd lelylan-node
    $ npm install


## Documentation

* [Lelylan API](http://dev.lelylan.com)


## Getting started

### Create the Lelylan client.

Before calling Lelylan APIs you need to set the access token.
To get an access token we suggest you to use [node-oauth](https://github.com/ciaranj/node-oauth).

```javascript
Lelylan = require('lelylan-node')({ token: token });
```

### Examples

If the functions fails an error object is passed as first argument to the callback.
Callbacks are always the last argument.

```javascript
// Get all devices
Lelylan.Devices.all(function(error, response) {
  console.log(response)
})
```

The response is an Object representing the resource body.

### Subscription services

If you need to access to the subscription services you do not need the access token,
but the Client ID and Client Secret.

```javascript
credentials = { client: { id: 'client-id', secret: 'secret' } };
Lelylan = require('lelylan-node')(credentials);

// Get all subscriptions
Lelylan.Subscriptions.all(function(error, response) {
  console.log(response)
})
```

Learn more about [subscriptions](http://localhost:4000/api/realtime#get-a-subscription).


## More examples

For more examples check out the [Lelylan Dev Center](http://dev.lelylan.com#language=node)
examples selecting the Node tab.


## Settings

### API endpoint

Configuration block.

```javascript
options = { 'endpoint' : 'http://localhost:8000' }
Lelylan = require('lelylan')(options);
```


## Errors

Exceptions are raised when a 4xx or 5xx status code is returned.

```javascript
Lelylan.HTTPError
```

Through the error message attribute you can access the JSON representation.

```javascript
Lelylan.Device.all(function(error, response) {
  if (error) { console.log(error.message); }
})
```

Learn more about the [error representation](http://dev.lelylan.com/api/core#errors).


## Contributing

Fork the repo on github and send a pull requests with topic branches. Do not forget to
provide specs to your contribution.


### Running specs

* Fork and clone the repository.
* Run `npm install` for dependencies.
* Run `make test` to execute all specs.
* Run `make test-watch` to auto execute all specs when a file change.


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
