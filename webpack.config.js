const path = require("path");

module.exports = function(options = {}) {
  return {
    mode: "production",
    entry: ["./src/index.js"],

    output: {
      library: "print",
      libraryTarget: "commonjs"
    }
  };
};
