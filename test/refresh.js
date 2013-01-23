var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');
var qs      = require('querystring');

var request, response, error;

describe('Lelylan API call',function() {

  describe('when access token is valid',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Device.find('1', function(e, r) {
        error = e; response = r; done();
      })
    })

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('returns a json object',function() {
      response.should.have.property('id');
    });
  });

  describe('when access token is expired',function() {

		var api;

    beforeEach(function(done) {
			Lelylan.config.token.token.expires_at = Date.yesterday();
			var params = { 'grant_type': 'refresh_token', refresh_token: 'ec1a59d298' };
			request = nock('http://people.lelylan.com').post('/oauth/token', qs.stringify(params)).replyWithFile(200, __dirname + '/fixtures/access_token.json');
			done();
		});

    beforeEach(function(done) {
      api = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Device.find('1', function(e, r) {
        error = e; response = r; done();
      })
    })

    it('makes the HTTP requests', function() {
      request.isDone(); api.isDone();
      response.should.have.property('id');
    });
  });
})

