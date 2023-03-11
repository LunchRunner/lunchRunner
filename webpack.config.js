const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client", "index.jsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
      publicPath: "/",
    },
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ title: "Code Walker", template: "./public/index.html" })],
};
