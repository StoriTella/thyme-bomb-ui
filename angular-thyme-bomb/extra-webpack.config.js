'use strict';

const path = require('path');
const webpack = require('webpack');

const webpack = require('webpack');
module.exports = function override(config) {
   const fallback = config.resolve.fallback || {};
   Object.assign(fallback, {
		util: require.resolve("util/"),
		assert: require.resolve("assert/"),
		url: require.resolve("url/"),
		crypto: require.resolve("crypto-browserify"),
		http: require.resolve("stream-http"),
		https: require.resolve("https-browserify"),
		tty: require.resolve("tty-browserify"),
		zlib: require.resolve('browserify-zlib'),
		os: require.resolve("os-browserify/browser"),
        async_hooks: false,
	  })
   config.resolve.fallback = fallback;
                   return config;
                  }
	  
