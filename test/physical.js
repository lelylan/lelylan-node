var oauth_credentials = { client: { id: 'client-id', secret: 'client-secret', site: 'http://people.lelylan.com' } };
var json_token        = { 'access_token': '4adc339e06c', 'refresh_token': 'ec1a59d2', 'expires_in': 7200 };

var OAuth2 = require('simple-oauth2')(oauth_credentials);
var token  = OAuth2.AccessToken.create(json_token);

var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Physical',function() {

  describe('#properties',function() {

    beforeEach(function(done) {
			var signature = 'b919e6d73fb956335507b809c457cbda0e4856e2';
      request = nock('http://mqtt.lelylan.com')
  							.filteringRequestBody(function(path) {return '*'})
								.put('/physicals/1', '*')
								.reply(202);
      done();
    })

    beforeEach(function(done) {
			Lelylan.Physical.properties('http://mqtt.lelylan.com/physicals/1', 'secret', {'properties': {}}, function(e, r) {
        error = e; response = r; done();
      })
    })

    it('makes the HTTP request', function() {
			request.isDone();
    });

    it('return a json array',function() {
      response.should.be.a('object');
    });
  });
})

