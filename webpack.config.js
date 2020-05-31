const path = require('path');
const isProd = process.env.NODE_ENV === 'prod';

module.exports = {
  devtool: isProd ? '' : 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: {
    index: [
      './src/index.js',
      './src/module.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'html']
  }
};
