const path = require("path");

module.exports = {
  mode: "development",
  entry: "./starter-code/src/controller.ts",
  devServer: {
    hot: true,
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "starter-code/dist"),
    publicPath: "starter-code/dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
