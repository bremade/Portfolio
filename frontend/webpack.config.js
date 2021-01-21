const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'build');
const REACT_DIR = path.join(__dirname, 'node_modules', 'react');

const isDev = process.env.NODE_ENV !== 'production'

const extractor = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
})

const devOutput = {
    publicPath: "/",
    path: BUILD_DIR,
    filename: "bundle.js"
}

const prodOutput = {
    publicPath: "/",
    path: BUILD_DIR,
    filename: "[name].[chunkhash].bundle.js",
    chunkFilename: "[name].[chunkhash].bundle.js"
}

const config = {
    cache: true,
    mode: isDev,
    entry: [
        SRC_DIR + '/index.js',
    ],
    output: isDev ? devOutput : prodOutput,
    optimization: isDev ? {} : {splitChunks: { chunks: "all" }},
    plugins: [
        extractor,
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: "./index.html",
            favicon: "./favicon.ico",
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        port: 8000,
        hot: true,
        proxy: {
            "/api/*":{
                target:"http://localhost:9000/",
                secure:"false"
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: "100000",
                    name: "fonts/[name].[ext]",
                },
                include: [
                    SRC_DIR,
                    path.resolve(__dirname, 'node_modules/bootstrap/fonts'),
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets'
                }
            }
        ]
    },
    resolve: {
        modules: [SRC_DIR, 'node_modules'],
        extensions: ['.js', '.jsx'],
        alias: {
            react: REACT_DIR,
        },
    },
};

module.exports = config;