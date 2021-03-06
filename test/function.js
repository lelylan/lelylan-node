var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Function',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/functions/1').replyWithFile(200, __dirname + '/fixtures/function.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Function.find('1', function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/functions').replyWithFile(200, __dirname + '/fixtures/functions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Function.all({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/functions?per=10').replyWithFile(200, __dirname + '/fixtures/functions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Function.all({'per': 10}, function(e, r) {
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


  describe('#public',function() {

    describe('with no search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/functions/public').replyWithFile(200, __dirname + '/fixtures/functions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Function.public({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/functions/public?per=10').replyWithFile(200, __dirname + '/fixtures/functions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Function.public({'per': 10}, function(e, r) {
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
      request = nock('http://api.lelylan.com').post('/functions', {'name': 'Function'}).replyWithFile(200, __dirname + '/fixtures/function.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Function.create({'name': 'Function'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').put('/functions/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/function.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Function.update('1', {'name': 'Updated'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').delete('/functions/1').replyWithFile(200, __dirname + '/fixtures/function.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Function.delete('1', function(e, r) {
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

