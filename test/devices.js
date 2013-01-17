var Lelylan = require('./../lib/lelylan-node.js')({ 'token': '5f7fb8f11b8499b' });
var nock    = require('nock');
var request, response, error;

describe('Lelylan.Devices',function() {

  describe('#get',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.get(1, function(e, r) {
        error = e; response = r; done();
      })
    })

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('return a json array',function() {
      response.should.be.a('object');
    });
  })

  describe('#all',function() {

    describe('with no search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/devices').replyWithFile(200, __dirname + '/fixtures/devices.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Devices.all({}, function(e, r) {
          error = e; response = r; done();
        })
      })

      it('makes the HTTP request', function() {
        request.isDone();
      });

      it('return a json array',function() {
        response.should.be.a('object');
      });
    })

    describe('with search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/devices', {'per': 10}).replyWithFile(200, __dirname + '/fixtures/devices.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Devices.all({'per': 10}, function(e, r) {
          error = e; response = r; done();
        })
      })

      it('makes the HTTP request', function() {
        request.isDone();
      });

      it('return a json array',function() {
        response.should.be.a('object');
      });
    })
  });

})

