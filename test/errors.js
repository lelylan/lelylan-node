var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.HTTPError',function() {

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

    it('returns a json object',function() {
      error.message.message.should.eql('Internal Server Error');
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

    it('returns a json object',function() {
      error.message.message.should.eql('Token not valid');
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

    it('returns a json object',function() {
      error.message.message.should.eql('Resource not found');
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

    it('returns a json object',function() {
      error.message.message.should.eql("Name can't be blank.");
    });
  });
})


