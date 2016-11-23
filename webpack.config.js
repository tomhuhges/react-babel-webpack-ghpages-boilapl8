const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const dev = require('./webpack.dev.config');
const prod = require('./webpack.prod.config');

var paths = {
  src: __dirname + '/src',
  build: __dirname + '/dist',
  css: __dirname + '/src/css'
};

var defaults = {
  entry: {
    app: paths.src,
    style: paths.css + '/style.css'
  },
  output: {
    path: paths.build
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
};

if ( process.env.npm_lifecycle_event === "build" ) {

  // build config
  var config = merge(
    defaults, 
    prod.config({
      paths: paths
    })
  );

} else {

  // dev config
  var config = merge(
    defaults,
    dev.config({
      paths: paths,
      server: {
        host: process.env.HOST,
        port: process.env.PORT
      }
    })
  );
}

module.exports = validate(config);