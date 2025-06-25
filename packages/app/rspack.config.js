const path = require('node:path');
const { rspack } = require("@rspack/core");

module.exports = [
  {
    mode: 'production',
    entry: { app: ['./index.mjs'] },
    optimization: {
      // Turn off minification to make output easier to read
      minimizer: [],
    },
    output: {
      path: path.resolve('./build/rspack-output'),
    },
    plugins: [
      new rspack.DllReferencePlugin({
        context: path.resolve('../..'),
        manifest: path.resolve('../dlls/lib-dll/build/rspack-output/lib.dll.json')
      })
    ]
  },
];
