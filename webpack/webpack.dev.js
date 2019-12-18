const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  mode:'development',
  output:{
    filename: `tabbar-hold-bundle.js`,
    path: path.resolve(__dirname, '../','examples/common'),
    library:'HoldTabbar',
    libraryTarget:'umd'
  },
  devServer: {
    contentBase: "./examples/common"
  },
});
