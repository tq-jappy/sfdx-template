module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build/bundle.js"
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
  },
  devtool: 'source-map'
}