const path = require("path");
const miniCssExtrarPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@customHooks": path.resolve(__dirname, "src/customHooks"),
      "@services": path.resolve(__dirname, "src/services"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            /*Allow using react without import it in each file*/
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [miniCssExtrarPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)/i,
        type: "asset/resource",
        generator: { filename: "./assets/images/[name][ext]" },
      },
      {
        test: /\.(woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new miniCssExtrarPlugin({
      filename: "assets/styles/main.css",
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3005,
    compress: true,
    historyApiFallback: true,
  },
};
