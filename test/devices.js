var config  = {
  'token' : '42cf98a147a8973e682b91337abfaf53eca64336767dc8fec5f7fb8f11b8499b'
}

var Lelylan = require('./../lib/lelylan-node.js')(config);
var nock    = require('nock');

var response, error, request;

describe('GET all devices',function() {

  before(function(done) {
    request = nock('http://api.lelylan.com').filteringRequestBody(function(path) { return '*' }).get('/devices', '*').replyWithFile(200, __dirname + '/fixtures/devices.json');
    //request = nock('http://api.lelylan.com').filteringRequestBody(/.*/, '*').get('/devices', '*').replyWithFile(200, __dirname + '/fixtures/devices.json');
    done();
  })

  before(function(done) {
    Lelylan.Devices.all(function(e, r) {
      error = e; response = r; done();
    })
  })

  it('return a json array',function() {
    if (error) console.log(error);
    console.log('Lelylan Node Test:', response);
    console.log(request.isDone());
  });
});

