const miniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const newCopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        port: '8888',
        static: './app',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: './css/app.min.css',
        }),
        new newCopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("app/images"),
                    to: path.resolve("public/images"),
                }
            ],
        }),
    ]
}