var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var config = {
  module: {}
};
module.sorceEnable = false;

const returnAll = watchFile => {
  var allPages = Object.assign({}, config, {
    entry: ["@babel/polyfill", "./javascript/app.js"],
    watch: watchFile,
    output: {
      path: __dirname,
      filename: "theme/assets/custom.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: __dirname
              }
            },
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: ["@babel/plugin-proposal-class-properties"]
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "theme/assets/custom.css"
      })
    ]
  });
  return [
    allPages,
  ];
}
// Return Array of Configurations
module.exports = (env, argv) => {
  let watchFile = false;
  if (argv.mode === "development") {
    watchFile = true;
  }
  return returnAll(watchFile);
};
