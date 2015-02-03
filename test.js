// test.js
var stubs = {
  '../lib2/bar': {
    method: function(val) {
      console.info('MOCK CALLED');
    },
    '@global': true
  }
};

var proxyquire = require('proxyquire');

var foo = proxyquire('./lib/foo', stubs);
foo();  // 'goodbye' SHOULD BE printed to stdout
