var glob = require('glob');
var path = require('path');

module.exports = function() {
  var dynamicModules = glob.sync(path.join(__dirname, '../globbed/*.js'));
  console.log('requiring modules:', dynamicModules);
  dynamicModules.forEach(function (m) {
    require(m)();
  });
}