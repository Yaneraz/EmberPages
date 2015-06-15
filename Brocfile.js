/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var funnel = require('broccoli-funnel');
var argv = require('yargs').argv;
var fs = require('fs');

var brandPath;
if (argv.brand != undefined) {
  brandPath = 'brands/' +  argv.brand.toLowerCase()
}

var options = {
  lessOptions: {
    inputFile: 'less/main.less',
    outputFile: 'app.css'
  }
};

if (fs.existsSync(brandPath)) {
  var outputTree = mergeTrees(['app', brandPath], {
    overwrite: true
  });

  var templateSrc = funnel(brandPath, {
    srcDir: 'templates'
  });

  var templateTree = mergeTrees(['app/templates', templateSrc], {
    overwrite: true
  });

  options.trees = {
    app: outputTree,
    templates: templateTree
  };

  options.trees = {
    app: outputTree
  };
}

var app = new EmberApp(options);

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
