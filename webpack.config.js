const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: path.resolve(__dirname, '/dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      services: path.resolve(__dirname, 'src/services')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
