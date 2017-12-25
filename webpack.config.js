const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    sub: './src/sub.js',
    app: './src/app.jsx'
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
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [ 'env', { 'modules': false } ],
                'react'
              ]
            }
          }
        ],
        include: [
          path.join(__dirname, 'node_modules/design-system-react')
        ],
        exclude: /node_modules/
      },
      {
        test: /\.min\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'aaa/bbb/ccc/'
          // Serve this up using your static web server
        }
      }
    ]
  }
}