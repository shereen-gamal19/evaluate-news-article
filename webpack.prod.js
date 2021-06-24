//we will install and insert html-webpack-plugin plugin and store it in the variable called ourHtmlWebPackPlugin
const ourHtmlWebPackPlugin = require('html-webpack-plugin')
//we will minify the css files by using mini-css-extract-plugin plugin and store it in the variable called ourMiniCssExtractPlugin  
const ourMiniCssExtractPlugin = require('mini-css-extract-plugin')
// we will use 2 plugins optimize-css-assets-webpack-plugin and terser-webpack-plugin and we store them in the variables called ourOptimizeCSSAssetsPlugin and ourTerserPlugin
const ourOptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ourTerserPlugin = require('terser-webpack-plugin');
// we will add the service works to show the content offline by using workbox-webpack-plugin plugin and store it in variable called ourWorkboxPlugin 
const ourWorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    entry: './src/client/index.js', // our entry point
    // to refer that we are in the production enironment mode
    mode: 'production',
    output: {//we will add all the javascript files in the library called Client
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
               {//we add the babel loader as we did in th webpack.dev.js file 
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
               },
               { //To convert all the scss  files to css file by using loaders and to apply our style into the DOM as we did in th webpack.dev.js file 
            test: /\.scss$/,// but we will update the sass loader because we son't the styles to be inline
            use: [ ourMiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]//we have 3 loaders  ourMiniCssExtractPlugin.loader, "css-loader", "sass-loader" 

               }
            
        ]
    },
    plugins: [//we will add and configure  html-webpack-plugin plugin
        //new is our instance for all plugins
        new ourHtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),// we will add  and configure the ourMiniCssExtractPlugin to the plugin array
        new ourMiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        // we will add and configure workbox-webpack-plugin in the plugin array
        new ourWorkboxPlugin.GenerateSW()
    ],
    optimization: {// we add optimization addribute to minify main.css file and here we use 2 plugins  TerserPlugin and OptimizeCSSAssetsPlugin
        minimizer: [new ourTerserPlugin({}), new ourOptimizeCSSAssetsPlugin({})],
        
        
    }
}
