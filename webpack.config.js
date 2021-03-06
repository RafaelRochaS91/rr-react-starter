const WebpackHtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const htmlPlugin = new WebpackHtmlPlugin({template:"./src/index.html", filename:"./index.html"});
const cssPlugin = new MiniCssExtractPlugin({filename:"[name].css", chunkFilename:"[id].css"});

module.exports = {
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {loader:"babel-loader"}
                
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:true}
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, "css-loader"]
            }

        ]
    },
    plugins: [
        htmlPlugin,
        cssPlugin
    ]
}