const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { ProvidePlugin, HotModuleReplacementPlugin } = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.tsx",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx"],
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
