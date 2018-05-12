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
  devTool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /(node_modules)/,
      //   loader: 'babel-loader',
      //   options: { presets: ['env'] }
      // },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      services: path.resolve(__dirname, 'src/services'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
