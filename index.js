'use strict';


function _setTarget(grunt, name, options) {
  grunt.config.set(name, {
    options: options
  });
}

function extendBump(grunt, pluginName, targets) {

  require(pluginName)(grunt);

  for (var key in targets) {
    if (targets.hasOwnProperty(key)) {
      _setTarget(grunt, key, targets[key]);
    }
  }

}

module.exports = extendBump;

