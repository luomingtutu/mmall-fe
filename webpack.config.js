/**
 * Created by Administrator on 2017-12-15.
 */
const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getHtmlConfig = function (name) {
    return {
        template : './src/view/'+ name +'.html',//html原始模板
        filename : 'view/'+ name +'.html',//目标文件目录
        inject : true,
        hash : true,
        chunks :['common',name]//通用模块
    }
}

module.exports = {
    entry:
        //'./src/page/index/index.js',
    {'common' : ['./src/page/common/index.js'],
     'index' : ['./src/page/index/index.js'],
        'login' : ['./src/page/login/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath : '/dist/',
        filename: 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    resolve : {
        alias: {
            node_modules    : __dirname + '/node_modules',
            util            : __dirname + '/src/util',
            page            : __dirname + '/src/page',
            service         : __dirname + '/src/service',
            image           : __dirname + '/src/image'
        }
    },
    module : {
        loaders : [
            {test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=100&name=resource/[name].[ext]' },
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    plugins : [
        //独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 单独打包css到文件里
        new ExtractTextPlugin('css/[name].css'),
        //html模板的处理
        new HtmlWebpackPlugin(getHtmlConfig('index')),
        new HtmlWebpackPlugin(getHtmlConfig('login')),
    ]
};