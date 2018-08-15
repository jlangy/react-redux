const webpack = require('webpack');
const path = require('path');

module.exports = {
    //mode not required but strongly recommended
    mode:'development',
    //need to include the hot loader entry
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
            //dont fully get this one, but it appears file
            //loader has a different syntax for use. Was outdated
            //in the docs
            {
                test: /\.html$/,
                use: 'file-loader?name=[name].[ext]'
            },
            //use babel for jsx files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use:'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    //Used by hot-reload to output which files changed (optional)
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
}