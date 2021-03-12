//#TODO Add the babel loader config
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devServer: {
        port: 8090
    },
    module: {
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin(
            {
                template: "./src/client/views/index.html",
                filename: './index.html'
            }
        )
    ]
}