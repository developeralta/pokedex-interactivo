const path = require("path");
const Dotenv = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
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
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 2861,
    disableHostCheck: true,
    historyApiFallback: true,
    host: "192.168.1.69",//your ip address
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
