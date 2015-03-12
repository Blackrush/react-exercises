module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: './_build'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  devServer: {
    contentBase: './src'
  }
};