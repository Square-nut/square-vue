var webpack = require('webpack');
var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: '',
    //入口文件输出配置
    output: {
        path: './build',
        filename: '[name].js',
        publicPath: './build/',
    },
    module: {
        //加载器配置
        loaders: [{
        	test: /\.vue$/,loader: 'vue'
        },{
        	test: /\.css$/,loader: 'style-loader!css-loader'
        },{
        	test: /\.js$/,loader: ['babel-loader'],
        	exclude: /node_modules/,
      		loader: 'babel'
      	},{ 
      		test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192'
      	},{
	        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
	        loader: 'file-loader'
      	}
      	]
    },
    vue: {
        autoprefixer: false
    },
    babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
    //其它解决方案配置
    resolve: {
    	root:[path.join(__dirname)],
        extensions: ['', '.js', '.json','.css'],
    }
};