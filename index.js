/* jshint node: true */
'use strict';

var path = require('path');

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
var map = require('broccoli-stew').map;

var dirname = path.dirname;

module.exports = {
  name: 'ember-background-video',

  treeForVendor: function(tree) {
    var trees = [];

    if (tree) {
      trees.push(tree);
    }

    var jbv = dirname(require.resolve('jquery-background-video'));

    var jbvJsTree = new Funnel(this.treeGenerator(jbv), {
      srcDir: '/',
      files: [
        'jquery.background-video.js',
      ],
      destDir: 'jquery-background-video'
    });
    var jbvCssTree = new Funnel(this.treeGenerator(jbv), {
      srcDir: '/',
      files: [
        'jquery.background-video.css',
      ],
      destDir: 'jquery-background-video'
    });
    jbvJsTree = map(jbvJsTree,
        (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);
    trees.push(jbvJsTree);
    trees.push(jbvCssTree);

    return mergeTrees(trees);
  },

  included: function(app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;

    app.import('vendor/jquery-background-video/jquery.background-video.css');
    app.import('vendor/jquery-background-video/jquery.background-video.js');
  }
};
