const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { ProvidePlugin, HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ProvidePlugin({ process: "process/browser" }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.join(__dirname, "src/assets"),
    //       to: path.join(__dirname, "dist/assets"),
    //     },
    //   ],
    // }),
  ],
};
