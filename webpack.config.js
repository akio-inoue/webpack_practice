const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepbkacPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
        use: [
          // {
          //   loader: "file-loader",
          //   options: {
          //     esModule: false,
          //     // name: "images/icon.png",
          //     name: "images/[name].[ext]",
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/main.css",
    }),
    new HtmlWepbkacPlugin({
      template: "./src/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
