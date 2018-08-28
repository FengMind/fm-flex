const path = require('path');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/by-flex.js",
    },

    //以下是服务环境配置
    devServer: {
        contentBase: "./dist",
        inline: true//实时刷新
    },

    module: {
        rules:[
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: "./images/[name].[hash:7].[ext]"
                    }
                }
            },
            {
                test: /\.(eot|woff|ttf|woff2)(\?|$)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 10000,
                        name: "./images/[name].[hash:7].[ext]"
                    }
                }
            }
        ]
    }
};