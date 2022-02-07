const {override} = require('customize-cra');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');

const ignoreWarnings = value => config => {
  config.ignoreWarnings = value;
  return config;
};

module.exports = {
  context: path.resolve(__dirname),
  devtool: 'source-map',
  entry: './entry.js',
  output: {
    filename: './output.js',
    path: path.resolve(__dirname),
  },
  plugins: [new WebpackBar()],
};

module.exports = override(ignoreWarnings([/Failed to parse source map/]));
