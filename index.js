/* jshint node: true */
'use strict';

var path = require('path');
var dirname = path.dirname;
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-background-video',

  treeForVendor: function(tree) {
    var trees = [];

    if (tree) {
      trees.push(tree);
    }

    var jbv = dirname(require.resolve('jquery-background-video'));

    var jbvTree = new Funnel(this.treeGenerator(jbv), {
      srcDir: '/',
      files: [
        'jquery.background-video.js',
        'jquery.background-video.css'
      ],
      destDir: 'jquery-background-video'
    });

    trees.push(jbvTree);

    return mergeTrees(trees);
  },

  included: function(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    app.import('vendor/jquery-background-video/jquery.background-video.css');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import('vendor/jquery-background-video/jquery.background-video.js');
    }
  }
};
