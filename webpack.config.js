const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: './index.ts',
	},
	output: {
		library: 'mini-js-utils',
		libraryTarget: 'umd',
		filename: 'index.js',
		path: path.resolve(__dirname, 'umd'),
	},
	module: {
		unknownContextCritical: false,
		rules: [
			{
				test: /\.ts?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".ts", ".js"]
	},
}
