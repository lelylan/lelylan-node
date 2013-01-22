var oauth_credentials = { client: { id: 'client-id', secret: 'client-secret', site: 'http://people.lelylan.com' } };
var json_token        = { 'access_token': '4adc339e06c', 'refresh_token': 'ec1a59d2', 'expires_in': 7200 };

var OAuth2 = require('simple-oauth2')(oauth_credentials);
var token  = OAuth2.AccessToken.create(json_token);

var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.History',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/histories/1').replyWithFile(200, __dirname + '/fixtures/history.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.History.find('1', function(e, r) {
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


  describe('#all',function() {

    describe('with no search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/histories').replyWithFile(200, __dirname + '/fixtures/histories.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.History.all({}, function(e, r) {
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

    describe('with search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/histories?per=10').replyWithFile(200, __dirname + '/fixtures/histories.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.History.all({'per': 10}, function(e, r) {
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
  });
})

