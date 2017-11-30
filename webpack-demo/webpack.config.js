module.exports = {
	entry: {
		get:'./src/script/index.js',
		save:'./src/script/others.js'
	},
	output: {
		path: '/item/webpack-demo/dist/js',   // 必须是绝对路径
		filename: '[name]-[chunkhash].js'
	},
	plugins:[
		new htmlWebpackPlugin()
	]
}