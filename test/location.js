var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Location',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/locations/1').replyWithFile(200, __dirname + '/fixtures/location.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Location.find('1', function(e, r) {
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


  describe('#all',function() {

    describe('with no search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/locations').replyWithFile(200, __dirname + '/fixtures/locations.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Location.all({}, function(e, r) {
          error = e; response = r; done();
        })
      })

      it('makes the HTTP request', function() {
        request.isDone();
      });

      it('returns a json array',function() {
        response[0].should.have.property('id');
      });
    });

    describe('with search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/locations?per=10').replyWithFile(200, __dirname + '/fixtures/locations.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Location.all({'per': 10}, function(e, r) {
          error = e; response = r; done();
        })
      })

      it('makes the HTTP request', function() {
        request.isDone();
      });

      it('returns a json array',function() {
        response[0].should.have.property('id');
      });
    });
  });


  describe('#create',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').post('/locations', {'name': 'Location'}).replyWithFile(200, __dirname + '/fixtures/location.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Location.create({'name': 'Location'}, function(e, r) {
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


  describe('#update',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').put('/locations/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/location.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Location.update('1', {'name': 'Updated'}, function(e, r) {
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


  describe('#delete',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').delete('/locations/1').replyWithFile(200, __dirname + '/fixtures/location.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Location.delete('1', function(e, r) {
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
})

