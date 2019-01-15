const webpack = require('webpack')
console.log(__dirname)
module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },

    devServ: {
        port: 8080,
        contentBase: './public' 
    },

    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: '/node_modules/',
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}