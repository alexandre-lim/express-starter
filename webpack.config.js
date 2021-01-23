const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  node: {
    // Keep Node.js behavior. More on this => https://webpack.js.org/configuration/node/
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()], // ignore all modules in node_modules folder
  entry: './src/server.js',
  output: {
    filename: '[name].bundle-server.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
    }),
  ],
};
