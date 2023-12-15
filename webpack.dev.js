const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
// const { plugins } = require('./webpack.common.js');

// call dotenv and it will return an Object with a parsed key 
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});


console.log("my object: %o", envKeys)


// extendedPlugins = common.plugins.push(new webpack.DefinePlugin(envKeys));
// common.plugins.push(new webpack.DefinePlugin(envKeys));

// newPlugins = common.plugins

// newPlugins.push(new webpack.DefinePlugin(envKeys));

// console.log(extendedPlugins.keys)

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  },
//   ...newPlugins
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ],
//   ...extendedPlugins  
});
console.log("my object: %o", common)