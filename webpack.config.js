 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 const dotEnv = require('dotenv-webpack');


 module.exports = {
   entry: './src/main.js',
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   devtool: 'eval-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
     new UglifyJsPlugin({sourceMap: true}),
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Doctors',
       template: './src/index.html',
       inject: 'body'
     }),
     new dotEnv()
   ],
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.js$/,
         exclude: [
           /node_modules/,
           /spec/
         ],
         loader: "eslint-loader"
       },
       {
        test: /\.js$/,
        exclude: [
          /node_modules/,
          /spec/
        ],
        loader: "babel-loader",
        options: {
          presets: ['es2015']
        }
      }
    ]
  }
};
