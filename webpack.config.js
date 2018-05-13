const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    publicPath: path.resolve(__dirname, '/dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname,
    port: 3001
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'awesome-typescript-loader']
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
      assets: path.resolve(__dirname, 'assets'),
      'common/components': path.resolve(__dirname, 'src/common/components'),
      'common/services': path.resolve(__dirname, 'src/common/services'),
      'common/utils': path.resolve(__dirname, 'src/common/utils'),
      'common/types': path.resolve(__dirname, 'src/common/types')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
