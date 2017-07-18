
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },

  module: {
    loaders: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /(node_modules)/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
          include: /flexboxgrid/
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file'
        }

      ]

  },
  plugins: [HTMLWebpackPluginConfig]
};
