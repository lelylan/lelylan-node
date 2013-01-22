//
// **Node.js client library for [Lelylan](http://dev.lelylan.com/)**
//
// **[View on Github &rarr;](https://github.com/lelylan/lelylan-node)**
//
// Lelylan Node makes it easy for developers to monitor and control all resources defined
// in Lelylan providing a simple, self descriptive and consistent representation of them.
//
// ## Getting started
//
// ### Installation
//
//     npm install lelylan-node
//
// ### Get an access token
//
// To start using lelylan you need to get an Access Token using
// [Simple OAuth2](http://andreareginato.github.com/simple-oauth2).
// If you are not familiar with OAuth2 learn more on
// [Lelylan Dev Center](http://dev.lelylan.com/api/oauth).
//
// The following example shows how to get an aceess token using the authorization code flow.
//
//
//     // Set the client credentials
//     var credentials = { client: {
//       id: '<client-id>',
//       secret: '<client-secret>',
//       site: 'http://people.lelylan.com'
//     }};
//
//     // Initialize the OAuth2 Library
//     var OAuth2 = require('simple-oauth2')(credentials);
//
//     // Authorization OAuth2 URI
//     var authorization_uri = OAuth2.AuthCode.authorizeURL({
//       redirect_uri: 'http://localhost:3000/callback'
//     });
//
//     // Redirect example using Express
//     // See http://expressjs.com/api.html#res.redirect
//     res.redirect(authorization_uri);
//
//     // Get the access token object (the authorization code is given from the previous step)
//     var token;
//     OAuth2.AuthCode.getToken({
//       code: 'authorization-code',
//       redirectURI: 'http://localhost:3000/callback'
//     }, function(error, result) { token = result });
//
//     // Wrap the access token to automatically refresh when expiring
//     var token = OAuth2.AccessToken.create(json_token);
//
//
// ### Lelylan API access
//
// Once you have the access token you can access to the Lelylan API. The
// following example shows how to print in the console a list of owned devices.
//
//     // Initialize Lelylan Node library
//     Lelylan = require('lelylan-node')({ token: token });
//
//     // Get all devices
//     Lelylan.Devices.all(function(error, response) {
//       console.log(response)
//     });
//
//
// ### Realtime services access
//
// When using the [subscriptions](http://dev.lelylan.com/api/realtime) services (realtime)
// you do not need an access token to subscribe to an event. In this
// case you need only to set the client credentials.
//
//
//     // Setup credentials
//     credentials = { client: { id: '<client-id>', secret: '<secret>' } };
//     Lelylan = require('lelylan-node')(credentials);
//
//     // Get all subscriptions
//     Lelylan.Subscriptions.all(function(error, response) {
//       console.log(response)
//     })
//
//
// ## Lelylan services
//
// ### Devices
//
// The Device API defines a set of services to monitor and control every existing device.
// Its final goal is to map every device to a unique URI which provides control over it.
// [Learn more](device.html).
//
//
// ### History
//
// When a device updates its properties or executes a function a new history resource with
// a snapshot of all device properties is created by Lelylan, also the ones that has not been
// updated. This makes it easy to recreate previous device status and extract usage patterns
// to improve the way people live their house.
// [Learn more](history.html).
//
// ### Types
//
// A type describes the structure of a device. In its simplest form every type can be defined
// as the combination of three key elements: properties (what vary during time), functions
// (what a device can do), statuses (what a device is in a specific time of its life).
// [Learn more](type.html).
//
// ### Properties
//
// A property is whatever vary in a device during time. It can be the intensity in a dimmer,
// the temperature in a cooling system or the volume in a television.
// [Learn more](property.html).
//
// ### Functions
//
// Functions defines the daily interactions you have with the devices in your house, for
// example when you turn on a light, close a door or raise the temperature in a room.
// With functions you can control any device in the same way you do everyday of your life.
// [Learn more](function.html).
//
// ### Statuses
//
// Properties are not always enough to describe the status of a device. Think at a roller
// shutter for example. It has the property aperture that is 100 when open or 0 when closed.
// But what if the roller shutter is opening? It is nether open or close. To have a complete
// control over the device status in a specific moment of its life is to use the status API.
// [Learn more](status.html).
//
// ### Locations
//
// Locations are the places we live in and where physical devices are placed. Lelylan identifies
// three types of locations usually organized in a hierarchical structure: houses, floors and
// rooms.
// [Learn more](location.html).
//
// ### Physical devices
//
// Physical devices are the real objects you physically interact with everyday of your life
// like lights, appliances, alarms and more. To enable the communication between Lelylan and
// physical devices they should provide a simple set of web services.
// [Learn more](physical.html).
//
// ### Subscriptions
//
// Get real-time updates by subscribing to a resource and its related event.
// [Learn more](subscription.html).
//
//
// ## Errors
//
// Exceptions are raised when a 4xx or 5xx status code is returned.
//
//     OAtuh2.HTTPError
//
// Through the error message attribute you can access the JSON representation based on
// HTTP status and error message.
//
//     OAuth2.AuthCode.getToken(function(error, token) {
//       if (error) { console.log(error.message); }
//     });
//
// Learn more about [Error Representations on Lelylan](http://dev.lelylan.com/api/core#errors).
//

//
// ## Configurations
//
// Lelylan Configuration accepts an object with the following valid params.
//
// * `token` - A [Simple OAuth2 AccessToken](http://andreareginato.github.com/simple-oauth2/access-token.html) object.
// * `client.id` - A string that represents the registered Client ID.
// * `client.secret` - A string that represents the registered Client secret.
// * `endpoint` - A string that represents the API endpoint (api.lelylan.com by deafault).
//
var appConfig = require('./config');

module.exports = function(config) {

  function configure(config) {
    config = config || {};
    mergeDefaults(config, appConfig);
    return config;
  }

  config = configure(config);
  var core = require('./core')(config);

  function mergeDefaults(o1, o2) {
    for (var p in o2) {
      try { if (typeof o2[p] == 'object') { o1[p] = mergeDefaults(o1[p], o2[p]); } else if (typeof o1[p] == 'undefined') { o1[p] = o2[p]; } }
      catch(e) { o1[p] = o2[p]; }
    }
    return o1;
  }

  return {
    'Device'       : require('./client/device')(config),
    'History'      : require('./client/history')(config),
    'Type'         : require('./client/type')(config),
    'Property'     : require('./client/property')(config),
    'Function'     : require('./client/function')(config),
    'Status'       : require('./client/status')(config),
    'Location'     : require('./client/location')(config),
    'Physical'     : require('./client/physical')(config),
    'Subscription' : require('./client/subscription')(config),
    'config'       : config
  }
};
