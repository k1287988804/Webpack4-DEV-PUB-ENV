const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");        //提取成单个css文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');      //压缩css插件


module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'./src/main.js'), //入口,表示要打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'),   //输出文件目录
        filename:'bundle.js'
    },
    plugins:[new htmlWebpackPlugin({
        // favicon: path.join(__dirname,'./src/img/favicon.ico'), //图标
        template:path.join(__dirname,'./src/index.html'),  //指定模板页面，将来会根据指定页面的路径去生成内存中的页面
        filename:'index.html', //指定生成的页面的名称
    }),       
    // new HtmlWebpackPlugin(//打包第二个页面
    //     {
    //         template: './app/src/page/index2.html',
    //         filename:'./page/index2.html'
    //     }),
    new MiniCssExtractPlugin({
        filename: "./src/css/[name].[hash:8].css"
    }),
    // new OptimizeCssAssetsPlugin(),      //压缩css文件
    new CleanWebpackPlugin(),   //清除dist
    new VueLoaderPlugin(),
    ],
    module:{
        rules:[
            {test: /\.js|jsx$/, use:{loader:'babel-loader',
            options:{presets: ["@babel/preset-env","@babel/preset-react","mobx"],
            plugins:["@babel/plugin-transform-runtime","@babel/plugin-proposal-class-properties",
              ["import", {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css" // `style: true` 会加载 less 文件
              }],
              ["component",{
                  "libraryName": "mint-ui",
                  "style": true 
              }]],
              sourceType:"unambiguous"}
            },
            exclude: /node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']}, //配置处理.css文件的第三方loader规则 
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置.less文件的第三方loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=100&name=[hash:8]-[name].[ext]'},
            {test: /\.(png|jpe?g|gif|svg|bmp)(\?.*)?$/,loader: 'url-loader',options: {limit: 5000,name:'./images/[name].[hash:8].[ext]',}} , //处理图片路径的loader,如果引用的图片小于xxbytes则会转为base64
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},  //处理字体文件
            {test:/\.vue$/,use:['vue-loader']},
        ]
    },//用于配置所有第三方模块加载器
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    },
    //反向代理
    devServer: {
        disableHostCheck: true,
        host: 'localhost', // 默认是localhost
        port: 3000, // 端口
        hot: true, // 开启热更新
        proxy: {
            '/API/*': {
                target: 'https://xiaojieapi.cn',
                secure: false,
                changeOrigin: true,
                onProxyReq: (proxyReq, req) => {
                    if (/^(localhost|[1-9][0-9]+)/.test(req.headers.host)) {
                        // 写死cookie
                        // proxyReq.setHeader(
                        //     'Cookie',
                        //     'serviceToken=tu4/pP6WfErBpvelEUiAbQV5a3c0kLpdAGO8RU7pyd9sINaQOnBhuzixKV+LToRUxqzdEuP0d60XpLjuJY5pnNB5P0YGWDNLIMdHP36CbxjG6j2kw9D35DhXoZ6Oxr9/hRQgvke2DV76BrkRw9cDppvMG8H5Af3JJuhHK9EmFY/rZQYSIFB3cPPZzuxjKm9eX3Fp0X3UFzBQh4PUMlVqWI+SZn3YuIfIPeRrrz47I7kT5SQXX3HUDqssdWTzItQN+9nuPpviV2LPOQPBXTRVl/gjjBL1tsOEu5W7N4kXwUc=; userId=3150060411; mifi-scf_slh=Q6anDKi8pKAnNGvXLqTJisTb7bk=; mifi-scf_ph=JW7MIGSFgF4KXnrXtQzxhg==; ROLE_MERCHANT=201158; Hm_lvt_2dd735d9e576dbdfc7535933de3e5a48=1585291143; Hm_lpvt_2dd735d9e576dbdfc7535933de3e5a48=1585291143'
                        // );
                    }
                    if (req.headers && req.headers.cookie) {
                        proxyReq.setHeader('Cookie', req.headers.cookie);
                    }
                },
            },
        },
    }
  }