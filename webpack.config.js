const path = require('path'); //node中的path对象，用于处理目录的对象
const webpack = require('webpack');

module.exports = {
    entry: './src/main', //入口文件地址
    output: { //输出
        path: path.join(__dirname, './dist'), //打包输出文件的地址，使用绝对路径
        filename: 'bundle.js', //webpack打包后的文件名
        publicPath: '/dist/', //公共文件生成的地址
    },
    mode: 'development',
    module: {
        rules: [ //加载器loader
            { //编译css
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            { //编译scss
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader']
            },
            { //编译.vue文件
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            },
            { //转换es6语法
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['env', {
                            modules: false
                        }], 'stage-0'
                    ]
                }
            },
            { //图片转化
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: { //别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        },
        //require时省略的扩展名，如require('module')不需要写成require('module.js')
        extensions: ['*', '.js', '.vue', '.json'],
    },
    devServer: { //服务器配置相关，以实现自动刷新
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    //开启source-map，webpack有多种source-map，在官网文档中可以查到
    devtool: '#eval-source-map'
}