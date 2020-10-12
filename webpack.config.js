const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: './index.js',
	},
	output: {
		library: 'mini-js-utils',
		libraryTarget: 'umd',
		globalObject: 'this',
		filename: 'index.js',
		path: path.resolve(__dirname, 'umd'),
	},
}
