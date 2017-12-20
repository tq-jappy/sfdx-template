const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    sub: './src/sub.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
    publicPath: '/assets'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    publicPath: '/assets/',
    port: 8081,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [ 'env', { 'modules': false } ]
              ]
            }
          }
        ]
      }
    ]
  }
}