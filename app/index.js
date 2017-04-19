'use strict';

var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  initializing: function () {
  },

  prompting: function (){
  },

  writing: {
    //复制.editorconfig
    editorConfig: function () {
      this.fs.copy(
        this.templatePath('.editorconfig'),
        this.destinationPath('.editorconfig')
      );
    },

    gitIgnore: function() {
      //复制.gitignore
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
    },

    packgeJson: function() {
      //复制PACKGE.JSON
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
    },

    babeLrc: function() {
      //复制.babelrc
      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
      );
    },

    appJs: function() {
      //复制app.js
      this.fs.copy(
        this.templatePath('app.js'),
        this.destinationPath('app.js')
      );
    },

    html: function() {
      //复制index.html
      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
      );
    },

    webpackConfig: function() {
      //复制webpack.config.js
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
    },

    binFolder: function() {
      //复制BIN
      this.fs.copy(
        this.templatePath('bin'),
        this.destinationPath('bin')
      );
    },

    //复制DIST
    dist: function() {
      this.fs.copy(
        this.templatePath('dist'),
        this.destinationPath('dist')
      );
    },

    //赋值SRC
    srcFolder: function() {
      this.fs.copy(
        this.templatePath('src'),
        this.destinationPath('src')
      );
    }
  },

  install: function () {
    this.npmInstall();
  },

  end: function () {
    if (this.options['skip-install']) {
      this.log("end happy");
      return;
    }
  }
});
