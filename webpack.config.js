var webpack = require('webpack');
var path = require('path');

module.exports = {
    //ҳ������ļ�����
    entry: '',
    //����ļ��������
    output: {
        path: './build',
        filename: '[name].js',
        publicPath: './build/',
    },
    module: {
        //����������
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
    //���������������
    resolve: {
    	root:[path.join(__dirname)],
        extensions: ['', '.js', '.json','.css'],
    }
};