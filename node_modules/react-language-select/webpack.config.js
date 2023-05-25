process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react-app"]
          }
        }
      }
    ]
  },
  externals: {
    react: "commonjs react" // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};
