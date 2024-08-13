var path = require("path");

module.exports = {
  entry: [path.join(__dirname, "bundle.cjs")],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    fallback: { path: require.resolve("path-browserify") }
  }
};