const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        trackSelection: './src/trackSelection.js'
    },
    mode: 'development',
    devtool: false,
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ],
        }),
    ],
};