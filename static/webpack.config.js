var path = require('path');
var webpack = require('webpack');
var url = require("file-loader");


module.exports = {
  devtool: 'source-map',
  entry: [
    './src/chatroom'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
     { 
      test: /\.styl$/, 
      include: path.join(__dirname, 'src'),
      loader: 'style-loader!css-loader!stylus-loader'
    },
    
    {
      test : /\.css$/,
      loader : 'style-loader!css-loader'
    },
    ]
  }
};
