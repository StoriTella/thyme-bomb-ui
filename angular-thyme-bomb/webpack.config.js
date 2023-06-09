'use strict';

const path = require('path');
const webpack = require('webpack');

plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
 ]
 
module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'bundle.js'
    },
	resolve: {
      extensions: [".tsx", ".ts", ".js", ".json"],
	  fallback: {
		util: require.resolve("util/"),
		assert: require.resolve("assert/"),
		url: require.resolve("url/"),
		crypto: require.resolve("crypto-browserify"),
		http: require.resolve("stream-http"),
		https: require.resolve("https-browserify"),
		zlib: require.resolve('browserify-zlib'),
		tty: require.resolve("tty-browserify"),
		os: require.resolve("os-browserify/browser"),
	  }
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
