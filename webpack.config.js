const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: ['./js/script.js', './css/main.css']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Output Management'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
