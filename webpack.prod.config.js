const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.config = function(options) {
  return {
    output: {
      publicPath: '/webpack-test/',
      filename: '[name].[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css'),
          include: options.paths.css
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin( [options.paths.build], {
        root: process.cwd()
      }),
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
}