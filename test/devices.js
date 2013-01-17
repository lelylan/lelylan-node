var config  = {
  'lelylan' : {
    'oauthAuthorizationUri' : 'http://localhost:3000/oauth/authorization',
    'oauthTokenUri' : 'http://localhost:3000/oauth/token',
    'apiUri' : 'http://localhost:8000'
  },
  'token': '42cf98a147a8973e682b91337abfaf53eca64336767dc8fec5f7fb8f11b8499b'
}

var Lelylan = require('./../lib/lelylan-node.js')(config);
var response, error;

describe('GET all devices',function() {

  before(function(done) {
    Lelylan.Devices.all(function(e, r) {
      error = e; response = r; done();
    })
  })

  it('return a json array',function() {
    if (error) console.log(error);
    console.log('Lelylan Node Test:', response);
  });
});

