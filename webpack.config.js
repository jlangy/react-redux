const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode:'development',
    entry: [
        './src/app.js',
        'react-hot-loader/patch'
           ],
    output: {
        path:path.resolve(__dirname, './build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}