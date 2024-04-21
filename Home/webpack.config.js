const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;
const path = require('path');
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:4000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  

  devServer: {
    port: 4000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Adds CSS to the DOM by injecting a <style> tag
          'css-loader',   // Interprets @import and url() like import/require() and will resolve them
          'postcss-loader', // Process CSS with PostCSS (optional, if you use it for autoprefixer etc.)
          'sass-loader'   // Loads a SASS/SCSS file and compiles it to CSS
        ],
        include: path.resolve(__dirname, 'src'),
      },
      //For CSS
      // {
      //   test: /\.(css|s[ac]ss)$/i,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "Home",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Header": "./src/Header",
        "./Footer": "./src/Footer",
        "./api/products": "./src/api/products.js"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv()
  ],
});
