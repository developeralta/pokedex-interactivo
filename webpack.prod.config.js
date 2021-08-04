const path = require("path");
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|jpeg)$/,
        use: {
          loader: "url-loader",
        },
      },
    ]
  },
  performance: {
    hints: "warning",
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
     new HtmlWebpackPlugin({
        inject: false,
        template: path.resolve(__dirname, "public/index.html"),
     }),
   new CleanWebpackPlugin(),
   new Dotenv()
  ]
}
