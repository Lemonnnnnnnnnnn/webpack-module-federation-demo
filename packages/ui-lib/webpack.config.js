//webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@beautiful-ui/components': path.resolve(__dirname, './components/index.js')
        }
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: '4000'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'), // 指定项目的 html 文件路径
        }),
        new ModuleFederationPlugin({
            name: "ui_lib",
            filename: 'ui.js',
            exposes: {
                "./components": "./components/index.js",
            },
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/, // 处理。jsx 结尾的文件
                exclude: /node_modules/, // 不处理 node_modules 文件夹中的文件
                use: {
                    loader: 'babel-loader', // 使用 babel-loader
                    options: {
                        presets: ['@babel/preset-react'] // 插件 @babel/preset-react
                    }
                },

            }
        ]
    },
};
