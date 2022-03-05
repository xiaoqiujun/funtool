
const path = require("path")
const env = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "development"
const plugins = []
module.exports = {
	mode: env, //production  development
	entry: './src/index.ts',
	output: {
		filename: "funtool.js",
		libraryTarget: "umd",
		globalObject: "this",
		library: "funtool",
		path: path.resolve(__dirname, "./"),
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".ts"],
	},
	plugins: [...plugins],
	devtool: 'source-map',
}
