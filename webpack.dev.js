const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        game: './src/Game.ts'
    },
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './build',
        port: 8000
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        pathinfo: false,
        filename: '[name].js',
        devtoolModuleFilenameTemplate: '../[resource-path]'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            },
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader'
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: { 
                    test: /[\\/]node_modules[\\/]/, 
                    name: "vendors", 
                    chunks: "all" 
                }
            }
        }
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    stats: true,
    plugins: [
        new webpack.DefinePlugin({
            'typeof SHADER_REQUIRE': JSON.stringify(false),
            'typeof CANVAS_RENDERER': JSON.stringify(true),
            'CANVAS_RENDERER': JSON.stringify(true),
            'typeof WEBGL_RENDERER': JSON.stringify(true),
            ' WEBGL_RENDERER': JSON.stringify(true)
        }),
        new CopyWebpackPlugin(
        [
            {
                from: './assets',
                to: './assets',
                force: true
            },
            {
                from: './src/styles',
                to: './styles',
                force: true
            },
            {
                from: './app.css',
                to: './app.css',
                force: true
            },
        ]),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};