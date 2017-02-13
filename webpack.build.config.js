var webpack = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        app: ['./src/app.js'],
        vendor: ['angular', 'oclazyload', 'angular-ui-router', 'angular-ui-bootstrap', 'lodash']
    },

    output: {
        path: __dirname + '/build/',
        filename: 'bundles/bundle.js',
        chunkFilename: "bundles/[id].[hash].bundle.js"
    },
    resolve: {
        root: [
            //    / __dirname + '/src/',
            path.resolve('./src/')
        ]
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/, /vendor/],
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "autoprefixer", "sass-loader"]
        }, {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=100&name=./static/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'bundles/vendor.[hash].bundle.js'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            '_': 'lodash'
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: 'gzip',
            threshold: 10240,
            minRatio: 0.8
        }),
        new CopyWebpackPlugin(
            [
                {
                    from: 'src/assets/css/',
                    to: 'assets/css/'
                },
                {
                    from: 'src/assets/fonts/',
                    to: 'assets/fonts/'
                },
                {
                    from: 'src/assets/images/',
                    to: 'assets/images/'
                },
                {
                    from: './src/index.html'
                }
            ], {
                ignore: [],
                copyUnmodified: true
            }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            cache: false
        }),
        new CleanWebpackPlugin(['build'])
    ]
};

module.exports = config;