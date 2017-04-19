const path    = require('path');
const webpack = require('webpack');

module.exports = {
  entry        : {},
  output       : {
    publicPath: "./dist/js",
    filename  : 'bundle.js'
  },
  resolveLoader: {
    modules         : ["node_modules"],
    extensions      : [".js", ".json"],
    mainFields      : ["loader", "main"],
    moduleExtensions: ['-loader']
  },
  externals    : {
    '$'        : "window.Zepto",
    'Zepto'    : "window.Zepto",
    'vue'      : 'window.Vue',
    'vuex'     : 'window.Vuex',
    'VueRouter': 'window.VueRouter',
    '_'        : 'window._',
  },
  module       : {
    loaders: [
      {
        test  : /\.vue$/,
        loader: 'vue'
      },
      {
        test   : /\.js$/,
        loader : 'babel',
        exclude: /node_modules/
      },
      {
        test  : /\.json$/,
        loader: 'json'
      },
      {
        test  : /\.html$/,
        loader: 'vue-html'
      }
    ]
  },
  devtool      : '#eval-source-map'
};

module.exports.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name     : "common",
    filename : "commons.js",
    minChunks: Infinity
  })
];

if (process.env.NODE_ENV === 'production') {
  module.exports.entry.bundle = [
    './src/index.js'
  ];
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]);
} else {
  module.exports.entry.bundle = [
    './src/index.js',
    'webpack-dev-server/client?http://localhost:3000',

    'webpack/hot/dev-server'
  ];
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]);
}
