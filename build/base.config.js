
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
module.exports = {
    entry:'../src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js',
        publicPath:'dist/'
    },
    mode:'production',

    // 基本路径
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 输出文件目录
    outputDir: 'dist', // 默认dist
    // 用于嵌套生成的静态资产（js,css,img,fonts）目录
    // assetsDir: '',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
    indexPath: 'index.html', // Default: 'index.html'
    filenameHashing: true,
    // 构建多页时使用
    pages: undefined,
    // eslint-loader是否在保存的时候检查
    lintOnSave: true,
    // 是否使用包含运行时编译器的Vue核心的构建
    runtimeCompiler: false,
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [],
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    // css相关配置
    css: {
        // 启用 CSS modules
        requireModuleExtension: true,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
    },
    // webpack-dev-server 相关配置
    devServer: {
        contentBase:'./dist',
        inline:true, //是否实时更新
        publicPath: process.env.NODE_ENV === 'development' ? '/' : 'http://c.m.163.com/nc/article/headline',
        open: true, //是否自动弹出浏览器页面
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://c.m.163.com/nc/article/headline', // 后端提供给你的接口地址 process.env.VUE_APP_URL, //
                changeOrigin: true, // true开启跨域
                pathRewrite: {
                    '^/api': '/' // 代理api使用方法=> /api/test/where
                },
                secure: false,
                // headers: {
                //     Referer: 'http://c.m.163.com/nc/article/headline'
                // },
            },
            '/seeNews':{
                target: 'https://3g.163.com', // 后端提供给你的接口地址
                changeOrigin: true, // true开启跨域
                pathRewrite: {
                    '^/seeNews': '/'
                },
                secure: false,
                // headers: {
                //     Referer: 'https://3g.163.com',
                // },
                router: {
                    'localhost:3000': 'https://3g.163.com',
                },
            }
        }
    },
    module:{
        rules:[
            /*
             *  test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
             *  use 属性，表示进行转换时，应该使用哪个 loader。
             */
            {
                // 正则表达式，匹配所有以.css结尾的样式文件
                test:/\.css$/,
                // css-loader:负责将css文件进行加载
                // style-loader:负责将样式加载到DOM中

                //使用多个loader时，是从右向左
                use:['style-loader','css-loader']

            },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                // 正则表达式，匹配所有以.less结尾的样式文件
                test:/\.less$/,
                // less-loader:负责将less文件进行转换为css文件
                // css-loader:负责将css文件进行加载
                // style-loader:负责将样式加载到DOM中

                //使用多个loader时，是从右向左
                use:['style-loader','css-loader','less-loader']

            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        //url-loader:图片资源加载器
                        loader: 'url-loader',
                        options: {
                            /**
                             * 1、当加载的图片 size 小于 limit的值，图片在H5中将以 base64 的形式加载
                             * 执行webpack 不会在 dist文件夹下 生成 哈希命名的图片文件；
                             * 2、当加载的图片 size 大于 limit的值，图片在H5中将以 http url 的形式从 localhost 本地加载；
                             * 执行webpack，将在 dist文件夹下 生成 哈希命名的图片文件；
                             */
                            limit: 8192,
                            //将图片文件打包生成在 dist
                            name:'img/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            {
                // babel-loader框架：实现将ES6语法转换成ES5
                test: /\.js$/,

                //排除node_modules的转换
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions:['.js','.css','.vue','.less'], //import文件时，可以省略的扩展名
        alias: {
            "assets":'@/assets',
            "components":'@/components',
            "pages":'@/pages',
            "router":'@/router',
            "store":'@/store'
        }
    },
    plugins: [
        //添加版权
        new webpack.BannerPlugin('Copyright © 2020-2021 YaHoo.com all rights reserved'),
        //js压缩
        new uglifyJsPlugin()
    ]

}
