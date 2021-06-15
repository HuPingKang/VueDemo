

//获取当前文件所在的位置
const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        // publicPath:'dist/'
    },
    mode:'production',
    // resolve: {
    //     extensions: ['.js', '.vue', '.json'],
    //     alias: {
    //         'vue$': 'vue/dist/vue.esm.js',
    //         '@': resolve('src'),
    //         'jquery': path.resolve(__dirname, '../node_modules/jquery/src/jquery')
    //     }
    // },
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
    }
}
