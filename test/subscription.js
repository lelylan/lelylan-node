var credentials = { client: { id: 'client-id', secret: 'secret' } };
var Lelylan = require('./../lib/lelylan-node.js')(credentials);
var nock    = require('nock');
var request, response, error;

describe('Lelylan.Subscription',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/subscriptions/1').replyWithFile(200, __dirname + '/fixtures/subscription.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Subscription.find('1', function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/subscriptions').replyWithFile(200, __dirname + '/fixtures/subscriptions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Subscription.all({}, function(e, r) {
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
        request = nock('http://api.lelylan.com').get('/subscriptions?per=10').replyWithFile(200, __dirname + '/fixtures/subscriptions.json');
        done();
      })

      beforeEach(function(done) {
        Lelylan.Subscription.all({'per': 10}, function(e, r) {
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
      request = nock('http://api.lelylan.com').post('/subscriptions', {'name': 'Subscription'}).replyWithFile(200, __dirname + '/fixtures/subscription.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Subscription.create({'name': 'Subscription'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').put('/subscriptions/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/subscription.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Subscription.update('1', {'name': 'Updated'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').delete('/subscriptions/1').replyWithFile(200, __dirname + '/fixtures/subscription.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Subscription.delete('1', function(e, r) {
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

