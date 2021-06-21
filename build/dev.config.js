
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
    // webpack-dev-server 相关配置
    devServer: {
        contentBase:'../dist',
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
    }
});
