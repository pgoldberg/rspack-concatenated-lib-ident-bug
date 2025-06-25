const path = require('node:path');
const { rspack } = require("@rspack/core");

module.exports = [
  {
    mode: 'production',
    entry: { "libDll": ['lib'] },
    optimization: {
      // Turn off minification to make output easier to read
      minimizer: [],
    },
    output: {
      path: path.resolve('./build/rspack-output'),
      library: {
        type: "window",
      },
    },
    plugins: [
      new rspack.DllPlugin({
        name: "libDll",
        context: path.resolve('../../..'),
        path: path.resolve('./build/rspack-output/lib.dll.json'),
      })
    ]
  },
];
