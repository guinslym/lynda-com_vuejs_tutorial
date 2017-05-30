var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/main.js',
  // Where should the compiled file go?
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      }
    ]
  }
}