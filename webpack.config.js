const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWepbkacPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "src"),
  },
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "javascripts/[name]-[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { "targets": "> 0.25%, not dead"}],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[contenthash][ext]",
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
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./stylesheets/[name]-[contenthash].css",
    }),
    new HtmlWepbkacPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
    }),
    new HtmlWepbkacPlugin({
      template: "./src/templates/access.pug",
      filename: "access.html",
    }),
    new HtmlWepbkacPlugin({
      template: "./src/templates/members/taro.pug",
      filename: "members/taro.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
