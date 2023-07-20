const { merge } = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9001,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    compress: true,
    liveReload: true,
    watchFiles: [
      'src/**/*.(html|css|s[a|c]ss|js)',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
