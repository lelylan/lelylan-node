var Lelylan = require('./../lib/lelylan-node.js')({ 'token': '5f7fb8f11b8499b' });
var nock    = require('nock');
var request, response, error;

describe('Lelylan.Property',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/properties/1').replyWithFile(200, __dirname + '/fixtures/property.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Property.find('1', function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/properties').replyWithFile(200, __dirname + '/fixtures/properties.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Property.all({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/properties?per=10').replyWithFile(200, __dirname + '/fixtures/properties.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Property.all({'per': 10}, function(e, r) {
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


  describe('#create',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').post('/properties', {'name': 'Property'}).replyWithFile(200, __dirname + '/fixtures/property.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Property.create({'name': 'Property'}, function(e, r) {
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


  describe('#update',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').put('/properties/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/property.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Property.update('1', {'name': 'Updated'}, function(e, r) {
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


  describe('#delete',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').delete('/properties/1').replyWithFile(200, __dirname + '/fixtures/property.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Property.delete('1', function(e, r) {
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

