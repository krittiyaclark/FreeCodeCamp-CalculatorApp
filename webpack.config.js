module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  watch: true,

  // Automatically reload the page when compilation is done.
  devServer: {
    inline: true
  },

  // Add sass-loader
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
