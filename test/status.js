var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Status',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/statuses/1').replyWithFile(200, __dirname + '/fixtures/status.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Status.find('1', function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/statuses').replyWithFile(200, __dirname + '/fixtures/statuses.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Status.all({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/statuses?per=10').replyWithFile(200, __dirname + '/fixtures/statuses.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Status.all({'per': 10}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/statuses/public').replyWithFile(200, __dirname + '/fixtures/statuses.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Status.public({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/statuses/public?per=10').replyWithFile(200, __dirname + '/fixtures/statuses.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Status.public({'per': 10}, function(e, r) {
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
      request = nock('http://api.lelylan.com').post('/statuses', {'name': 'Status'}).replyWithFile(200, __dirname + '/fixtures/status.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Status.create({'name': 'Status'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').put('/statuses/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/status.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Status.update('1', {'name': 'Updated'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').delete('/statuses/1').replyWithFile(200, __dirname + '/fixtures/status.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Status.delete('1', function(e, r) {
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

