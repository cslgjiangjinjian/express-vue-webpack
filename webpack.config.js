module.exports = {
	//应用的入口
	//entry:__dirname+'/public/develop/main.js',
	entry:{
		main:[__dirname+'/public/develop/main.js'],
		list:[__dirname+'/public/develop/list.js']
	},
	//编译打包后的输出
	output:{
		path:__dirname+'/public/develop/dist/',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				 test: /\.js$/,
				 loader: 'babel',
				 exclude: /node_modules/
			},
			{
				test:/\.vue$/,//正则匹配所有以 `.vue` 结尾的文件
				loader:'vue' // 对匹配到的文件使用何种 loader
			}/*,
			{ 
				test: /\.css$/,
				exclude: /\.useable\.css$/, 
				loader: "style!css" 
			},
			{ 
				test: /\.useable\.css$/, 
				loader: "style/useable!css" 
			}*/
		]
	},
	/*vue:{
		loaders:{
			js:'babel'
		}
	},*/
	resolve:{
		extensions:['','.js','.vue','html'],
	},
	watch:true //观察者模式每次修改保存webpack.config.js中引用文件，bundle.js的文件会自动更新
}