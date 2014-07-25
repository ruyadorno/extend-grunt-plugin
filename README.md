# extend-grunt-plugin

Helper method to easily extend a grunt plugin.


## About

Reusing a grunt plugin from inside your own plugin is not as straightforward as expected. This small module takes care of forwarding the configurations from your plugin to whatever other plugin you need to use.


## Install

You can install this module using **npm**:

```shell
npm install extend-grunt-plugin --save-dev
```


## Usage

Giving that you are actually creating your grunt task as a separate plugin, let's assume that you want to invoke the `grunt-bump` plugin from inside your task. First of all make sure that you have installed the desired dependency (in this case grunt-bump) locally in your project using npm.

Here is what the setup should look like:

```js
var extendGruntPlugin = require('extend-grunt-plugin');

module.exports = function (grunt) {
  grunt.registerMultiTask('my_awesome_task', function () {

    var options = this.options({
      pushTo: 'origin' // Overrides default value from grunt-bump
    });

    // Creates "bump" and "bump-only" targets on grunt, that can be run later
    // Values that user sets for "my_awesome_task" will be forwarded to these tasks
    extendGruntPlugin(grunt, require('grunt-bump'), {
      'bump': options,
      'bump-only': options // Creates a "bump-only" target
    });

    // Runs the "bump" subtask :)
    grunt.task.run('bump');
  });
};
```


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

