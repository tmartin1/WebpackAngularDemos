'use strict';
var webpack = require('webpack');
var path = require('path');

var APP = path.join(__dirname, '/app');

module.exports = {
    context: APP,
    entry: {
        // Define core application modules.
        app: [
            'webpack/hot/dev-server',
            './bootstrap.js'
        ],
        // Define vendor chunk modules.
        vendor: [
            // JS
            'jquery',
            'velocity-animate',
            'angular',
            'ui-router',
            'moment',
            'node-lumx',
            'oclazyLoad',
            // Styles
            '../node_modules/mdi/css/materialdesignicons.min.css',
            '../node_modules/node-lumx/dist/scss/_lumx.scss',
            '../app/index.scss'
        ]
    },
    output: {
        path: APP,
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name]-[hash].js'
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),

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
        }),

        // [HotModuleReplacementPlugin] Enables Hot Module Replacement. (This requires records data
        // if not in dev-server mode, recordsPath). Generates Hot Update Chunks of each chunk in the
        // records. It also enables the API and makes __webpack_hash__ available in the bundle.
        new webpack.HotModuleReplacementPlugin()
    ]
};
