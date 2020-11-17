const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: '/node_modules',
                loader: 'babel-loader'
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.EnvironmentPlugin({
            BASE_URL: 'http://private-9aad-note10.apiary-mock.com',
            FALLBACK_LANG: 'en',
        }),
    ],
    target: 'node'
}
