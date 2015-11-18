'use strict';
var webpack = require('webpack');
var path = require('path');
var APP = __dirname + '/app';

module.exports = {
    context: APP,
    entry: {
        app: ['webpack/hot/dev-server', './bootstrap.js']
    },
    output: {
        path: APP,
        filename: '.tmp/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate!babel!jshint',
            exclude: /node_modules|bower_components/
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            loader: 'file-loader?name=res/[name].[ext]?[hash]'
        }, {
            test: /\.html/,
            loader: 'raw'
        }, {
            test: /\.json/,
            loader: 'json'
        }]
    },
    resolve: {
        root: APP
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'production'
            }
        })
    ]
};
