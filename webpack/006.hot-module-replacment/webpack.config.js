const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },
  devtool: "inline-source-map",
  plugins: [new HtmlWebpackPlugin({ title: "Hot-Module-Replacement" })],
  devServer: {
    static: "./dist",
    hot: true,
  },
};
