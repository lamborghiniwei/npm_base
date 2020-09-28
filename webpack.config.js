const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lzw_utils.js',
    library: 'utils',
    libraryTarget: 'umd'
  },
}