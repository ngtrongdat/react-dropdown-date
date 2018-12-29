var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/react', '@babel/env'],
						plugins: [
							'react-html-attrs',
							['@babel/proposal-decorators', { legacy: true }],
							'@babel/proposal-class-properties',
							'@babel/plugin-syntax-dynamic-import'
						]
					}
				}
			}
		]
	},
	externals: {
		react: 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
	}
};
