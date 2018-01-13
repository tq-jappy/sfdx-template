const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'my-app'),
  entry: {
    main: './main.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    library: ['MyApp'],
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
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
      inject: false,
      hash: true
    })
  ]
}