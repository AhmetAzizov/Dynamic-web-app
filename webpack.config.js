const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  target: 'web',
  externals: [nodeExternals()],
  entry: './public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "os": false,
      "path": false,
      "child_process" : false,
      "./zlib_bindings": false,
      "./zlib_bindings.js": false,
      "./zlib_bindings.wasm": false,
      "./zlib_bindings.node": "zlib-browserify"
    }  
    }
};