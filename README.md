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


## Getting started

Before calling Lelylan APIs you need to set the access token using
[Simple OAuth2](https://github.com/andreareginato/simple-oauth2).

```javascript
// Set the OAuth2 client credentials
var credentials = { client: { id: '<client-id>', secret: '<client-secret>', site: 'https://example.org' }};

// Initialize the OAuth2 Library
var OAuth2 = require('simple-oauth2')(credentials);

// Authorization OAuth2 URI
var authorization_uri = OAuth2.AuthCode.authorizeURL({ redirect_uri: 'http://localhost:3000/callback' });

// Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
res.redirect(authorization_uri);

// Get the access token object (the authorization code is given from the previous step).
var token;
OAuth2.AuthCode.getToken({ code: 'authorization-code', redirectURI: 'http://localhost:3000/callback' },
  function(error, result) { token = OAuth2.AccessToken.create(result); }
);

// Initialize Lelylan Node library
Lelylan = require('lelylan-node')({ token: token });

// Get all devices
Lelylan.Devices.all(function(error, response) {
  console.log(response)
})
```

Using Simple OAuth2 the access token is automatically refreshed when expired.


### Documentation

* Check out the complete [Lelylan Node Documentation](http://lelylan.github.com/lelylan-node).
* Check out [Lelylan Dev Center](http://dev.lelylan.com/api#language=node)


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
