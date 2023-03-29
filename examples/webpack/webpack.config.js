const path = require('path');

module.exports = {
  mode: "production",
  // mode: "development",
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'myLib',
      type: 'umd'
    }
  },
  optimization: {
    minimize: false
  }
};