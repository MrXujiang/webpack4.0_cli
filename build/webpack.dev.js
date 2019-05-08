const base = require('./webpack.base');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge({
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', // 调试的时候显示源代码错误的行，建议在开发模式下使用
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [  // loader解析的顺序是从下到上，从右到左的顺序
                    'style-loader',  //使用MiniCssExtractPlugin时就不能使用style-loader了
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2   //该方式可以让@import引入的css文件再次执行一边css打包loader
                        }
                    },
                    // 'sass-loader',
                    'less-loader',
                    'postcss-loader',
                ]
            }
        ]
    },
    // 服务器配置
    devServer: {
        port: '8081',
        // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
        historyApiFallback: true, // 解决单页面路由问题，
        contentBase: '../dist',
        open: true,  //自动打开浏览器
        hot: true,  // 开启热替换, css代码跟新不刷新页面
        // hotOnly: true 开启后只有手动配置才能更新，即使hot为true也不刷新浏览器
        proxy: {
            index: '', // 将index设置为空，可以对根路径进行转发
            'api/get': 'xxxx.com/api', // 第一种方式，直接代理到api路径
            'api/vue': {  // 第二种方式，在路径需要临时替换时使用
                target: 'xxxx.com/api',
                pathRewrite: {
                    'head': 'demo'  //此时访问head路径将被代理到demo下
                },
                secure: false,  //对https请求的配置，false为支持https
                changeOrigin: true  //做代理分发时允许访问其他网站，突破网站限制，建议在开发环境使用
            },

        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
	}
}, base)