const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin('styles.css');//pass the name of the output css file
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
 entry: ['babel-polyfill', './src/app.js'],
 output: {
   path: path.join(__dirname, 'public', 'dist'),
   filename: 'bundle.js'
 },
 module:{
   rules: [{
     loader: 'babel-loader',
     test: /\.js$/,
     exclude: /node_modules/
   },{
     test: /\.s?css/,
     use: CSSExtract.extract({
       use: [
         {
           loader: 'css-loader',
           options: {
             sourceMap: true
           }
         },
         {
           loader: 'sass-loader',
           options: {
             sourceMap: true
           }
         }
       ]
     })
   }]
 },
 plugins: [
   CSSExtract
]
};
