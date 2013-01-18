var Lelylan = require('./../lib/lelylan-node.js')({ 'token': '5f7fb8f11b8499b' });
var nock    = require('nock');
var request, response, error;

describe('Lelylan.Devices',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.find('1', function(e, r) {
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


  describe('#privates',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/devices/1/privates').replyWithFile(200, __dirname + '/fixtures/device_privates.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.privates('1', function(e, r) {
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
    });

    describe('with search params', function() {

      beforeEach(function(done) {
        request = nock('http://api.lelylan.com').get('/devices?per=10').replyWithFile(200, __dirname + '/fixtures/devices.json');
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
    });
  });


  describe('#create',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').post('/devices', {'name': 'Device'}).replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.create({'name': 'Device'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').put('/devices/1', {'name': 'Updated'}).replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.update('1', {'name': 'Updated'}, function(e, r) {
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
      request = nock('http://api.lelylan.com').delete('/devices/1').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.delete('1', function(e, r) {
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


  describe('#properties',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').put('/devices/1/properties', {'properties': {}}).replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.properties('1', {'properties': {}}, function(e, r) {
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


  describe('#execute',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').put('/devices/1/functions', {'function': ''}).replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.execute('1', {'function': ''}, function(e, r) {
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


  describe('#activate',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').post('/activations/0a8f1006af').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.activate('0a8f1006af', function(e, r) {
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


  describe('#deactivate',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').delete('/activations/0a8f1006af').replyWithFile(200, __dirname + '/fixtures/device.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Devices.deactivate('0a8f1006af', function(e, r) {
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

