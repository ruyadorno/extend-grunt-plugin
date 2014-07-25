'use strict';


function _setTarget(grunt, name, options) {
  grunt.config.set(name, {
    options: options
  });
}

function extendBump(grunt, plugin, targets) {

  plugin(grunt);

  for (var key in targets) {
    if (targets.hasOwnProperty(key)) {
      _setTarget(grunt, key, targets[key]);
    }
  }

}

module.exports = extendBump;

