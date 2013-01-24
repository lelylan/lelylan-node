var exports = module.exports;

module.exports = function() {

  var oauth_credentials = {
    clientID: 'client-id',
    clientSecret: 'client-secret',
    site: 'http://people.lelylan.com'
  };

  var json_token = {
    'access_token': '4adc339e0',
    'refresh_token': 'ec1a59d298',
    'expires_in': 7200
  };

  var OAuth2 = require('simple-oauth2')(oauth_credentials);
  return OAuth2.AccessToken.create(json_token);
};
