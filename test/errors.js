var oauth_credentials = { client: { id: 'client-id', secret: 'client-secret', site: 'http://people.lelylan.com' } };
var json_token        = { 'access_token': '4adc339e06c', 'refresh_token': 'ec1a59d2', 'expires_in': 7200 };

var OAuth2 = require('simple-oauth2')(oauth_credentials);
var token  = OAuth2.AccessToken.create(json_token);

var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan Error',function() {

  describe('with status code 500',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').reply(500, 'Internal Server Error');
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

    it('return a json array',function() {
      error.should.be.a('object');
    });
  });

  describe('with status code 401',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(401, __dirname + '/fixtures/errors/401.json');
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

    it('return a json array',function() {
      error.should.be.a('object');
    });
  });

  describe('with status code 404',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(404, __dirname + '/fixtures/errors/404.json');
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

    it('return a json array',function() {
      error.should.be.a('object');
    });
  });

  describe('with status code 422',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(422, __dirname + '/fixtures/errors/422.json');
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

    it('return a json array',function() {
      error.should.be.a('object');
    });
  });
})


