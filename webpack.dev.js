// we will make a reference to the dist folder in the html file so we will use 'html-webpack-plugin' plugin 
// we will store the plugin in the variable called ourHtmlWebPackPlugin
const ourHtmlWebPackPlugin = require('html-webpack-plugin')
// we will make a clean plugin and we store it in the variable called myCleanWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ourWorkboxPlugin = require('workbox-webpack-plugin');



// required statements to be added
const path = require("path")
// to insert and install webpack in the variable called webpack
const webpack = require("webpack")
// we will add module.export{}
module.exports = {
    //i will add an entry webpack which is index.js file
    entry: './src/client/index.js',
    // to refer that we are in the development enironment mode
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    output: {//we will add all the javascript files in the library called Client
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [//we will add babel loader on the files that ends with .js extention and we will exclude the files that in node_modules file and our loader is babel-loader
                {
              test: '/\.js$/',
              exclude: /node_modules/,
              loader: "babel-loader"
                },
                {//To convert all the scss  files to css file by using loaders and to apply our style into the DOM
                    test: /\.scss$/,
                    use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                }     
       
        
        ]
    },
    plugins: [
        // new is the instance of the our plugins  
        //we will add the html-webpack-plugin plugin to the plugin array
        new ourHtmlWebPackPlugin({
            template: './src/client/views/index.html',// we till the webpack to look at that file 
            filename: './index.html'
        }),//we will add the clean-webpack-plugin plugin to the plugin array
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new ourWorkboxPlugin.GenerateSW()
  

        
    ],

    
}
