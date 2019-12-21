const path = require("path");

const version=process.env.npm_package_version;
module.exports = {
  entry: './src/index.js',
  output: {
    filename: `uni-hold-tabbar@${version}.js`,
    path: path.resolve(__dirname, '../','dist'),
    library:'HoldTabbar',
    libraryTarget:'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        use: {
           loader: 'babel-loader', 
           options: {  
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1%', 'last 2 version']
                        } 
                    }]
                    
                ] 
           }
        },
        exclude: '/node_module/'
    }
    ]
  }
};
