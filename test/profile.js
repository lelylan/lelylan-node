var oauth_credentials = { client: { id: 'client-id', secret: 'client-secret', site: 'http://people.lelylan.com' } };
var json_token        = { 'access_token': '4adc339e06c', 'refresh_token': 'ec1a59d2', 'expires_in': 7200 };

var OAuth2 = require('simple-oauth2')(oauth_credentials);
var token  = OAuth2.AccessToken.create(json_token);

var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Profile',function() {

  describe('#me',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/me').replyWithFile(200, __dirname + '/fixtures/profile.json');
      done();
    });

    beforeEach(function(done) {
      Lelylan.Profile.me(function(e, r) {
        error = e; response = r; done();
      });
    });

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('return a json array',function() {
      response.should.have.property('email');
    });
  });
});

