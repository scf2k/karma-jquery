var path = require('path'),
    fs = require('fs');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var createFramework = function(ver) {
    return function(files) {
        files.unshift(createPattern(path.join(__dirname, 'jquery', ver)));
    };
}

module.exports = {};

fs.readdirSync(path.join(__dirname, 'jquery')).forEach(function(file) {
    var framework = createFramework(file);
    framework.$inject = ['config.files'];
    module.exports['framework:' + path.basename(file, '.js')] = ['factory', framework];
});
