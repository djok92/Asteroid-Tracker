// const glob = require("glob");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./assets/scripts/index.js",
    results: "./assets/scripts/results.js"
  },
  output: {
    path: __dirname + "/dist/js",
    filename: "[name].bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: "./../../index.html",
      template: "assets/templates/index.html",
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "./../../results.html",
      template: "assets/templates/results.html",
      chunks: ["results"]
    })
  ]
};
