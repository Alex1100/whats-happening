const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'client/');
const BUILD_DIR = path.resolve(__dirname, 'client/bundle');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react', 'stage-1']},
        }],
      }
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  devtool: "inline-source-map",
}
