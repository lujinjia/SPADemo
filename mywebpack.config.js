/**
 * Created by Jim Loo on 2017/6/11 0011.
 */

const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry : './app/spa.js',

    output : {
        path : resolve(__dirname, 'dist'),
        filename : 'spa.js'
    },

    module : {
        rules : [
            {
                enforce : "pre",
                test : /\.js%/,
                exclude : /node_modules/,
                loader : "eslint-loader",
                options : {
                    failOnWarning : true
                }
            },

            {
                test : /\.js$/,
                exclude : /(node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['env']
                    }
                }
            }
        ]
    },

    plugins : [
        new htmlWebpackPlugin({
            title : 'SPA',
            filename : 'spa.html',
            template : 'app/spa.html'
        })
    ]


}