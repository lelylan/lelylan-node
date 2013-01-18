var Lelylan = require('./../lib/lelylan-node.js')({ 'token': '5f7fb8f11b8499b' });
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

    it('return a json array',function() {
      response.should.be.a('object');
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

      it('return a json array',function() {
        response.should.be.a('object');
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

      it('return a json array',function() {
        response.should.be.a('object');
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

    it('return a json array',function() {
      response.should.be.a('object');
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

    it('return a json array',function() {
      response.should.be.a('object');
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

    it('return a json array',function() {
      response.should.be.a('object');
    });
  });
})

