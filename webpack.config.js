const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { SourceMapDevToolPlugin } = require("webpack");

const port = 3000;
let publicUrl = `http://localhost:${port}`;
if (process.env.GITPOD_WORKSPACE_URL) {
    const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
    publicUrl = `wss://${port}-${host}/ws`;
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }, "source-map-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            },
            {
                test: /\.(xls|xlsx|XLS|XLSX)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

        ]
    },
    output: {
        filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),


        }),
        new SourceMapDevToolPlugin({
            filename: "[file].map"
        }),
    ],
    devServer: {
        port,
        hot: true,
        allowedHosts: "all",
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        client: {
            webSocketURL: publicUrl
        },
    },

};