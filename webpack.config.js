const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    uniqueName: "devlake_settings_blueprints",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./src/assets/images/favicon.ico",
    }),
    new ModuleFederationPlugin({
      name: "devlake_settings_blueprints",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
        "react-router-dom": {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),
   new webpack.DefinePlugin({
  "process.env.STRAPI_URL": JSON.stringify(
    process.env.STRAPI_URL
  ),
}),
  ],
  devServer: {
    static: "./dist",
    hot: false,
    liveReload: true,
    historyApiFallback: true,
    port: 3022,
    open: false,
  },
  mode: "development",
};