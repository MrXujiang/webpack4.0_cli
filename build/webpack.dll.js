const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        venders: ['lodash'],
        react: ['react', 'react-dom']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, '../dll'),
        library: '[name]'
    },
    plugins: [
        // 创建dll包和模块的映射关系
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json')
        })
    ]
}