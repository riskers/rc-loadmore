var path = require('path');
var env = process.env.NODE_ENV;

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    library: 'rc-loadmore',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
}
