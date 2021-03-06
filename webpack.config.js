const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		}, {
			test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
		}, ],
	},
	plugins: [new MiniCssExtractPlugin()],
	devServer: {
		open: true,
		publicPath: "",
		contentBase: path.resolve(__dirname, "dist"),
		watchContentBase: true,
		compress: true,
	},
};

module.exports = config;
