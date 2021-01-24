const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const PAGES_DIR = './src/pages/';
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));


module.exports = (argv) => ({
    entry : {
        index: './src/js/index.js',
        shop: './src/js/shop.js',
        cart: './src/js/cart.js',
        about: './src/js/about-us.js',
        contact: './src/js/contact.js'
    },
    output: {
        publicPath : './',
        path: path.resolve(__dirname,'docs'),
        filename: 'js/[name].js',
        workerChunkLoading: false
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            chunks: ['name'],
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`
        })),
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/img', to: "img" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [ "babel-loader", "eslint-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'], 
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url:false,
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            keepQuery: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }], 
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader'
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]',
                },
            },
        ]  
    },
    devtool: argv.mode === 'development' ?
        'eval-source-map' :
        undefined
});