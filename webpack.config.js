const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/template.html"),
      title: "Todo App",
      filename: "index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
