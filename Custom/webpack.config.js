'use strict';
var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var config = require('./webpack');

var APP = path.join(__dirname, '/app');

module.exports = {
    context: APP,
    entry: {
        app: config.bundle.app,
        vendor: config.bundle.vendor
    },
    output: {
        path: APP,
        filename: 'app.bundle.js'
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
        // [CommonsChunkPlugin] Generate an extra chunk, which contains common modules shared
        // between entry points.
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

        // [HotModuleReplacementPlugin] Enables Hot Module Replacement. (This requires records data
        // if not in dev-server mode, recordsPath). Generates Hot Update Chunks of each chunk in the
        // records. It also enables the API and makes __webpack_hash__ available in the bundle.
        new webpack.HotModuleReplacementPlugin(),

        // [DefinePlugin] Define free variables. Useful for having development builds with debug
        // logging or adding global constants.
        new webpack.DefinePlugin({
            MODE: {
                production: process.env.NODE_ENV === 'production'
            }
        }),

        // [ProvidePlugin] Automatically loaded modules. The module (value) is loaded when the
        // identifier (key) is used as free variable in a module. The identifier is filled with the
        // exports of the loaded module.
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'global.$': 'jquery',
            moment: 'moment',
            'global.moment': 'moment'
        })
    ]
};
