const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('./webpack.config.js');
const compiler = webpack(webpackDevConfig);

const app = new webpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  inline: true,
  stats: {
    colors: true
  },
  proxy:{
    '/api':{
      target:"http://localhost",
      secure: false
    }
  }
});

module.exports = app;
