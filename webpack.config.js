const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config/config');

const basePath = __dirname;

module.exports = {
  mode: "development",
  context: path.join(basePath, 'src'),
  entry: config.source.entry,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    library: [config.source.libraryPrefix, '[name]'],
    libraryTarget: 'umd'
  },
  // devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 8081
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', 'react']
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.svg$/,
        use: 'url-loader?mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../public/index.html',
      inject: 'head', // false,
      hash: true
    })
  ]
}