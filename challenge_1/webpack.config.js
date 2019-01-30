const path = require('path');
var SRC_DIR = path.join(_dirname, 'client/src');
var DIST_DIR = path.join(_dirname, 'public/dist');


module.exports = {
  mode: 'decelopment',
  entry: `#{SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components),
        include: SRC_loader,
        query: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    ]
  }
};