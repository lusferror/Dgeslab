const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = 3500;
let publicUrl = `http://localhost:${port}`;
if(process.env.GITPOD_WORKSPACE_URL){
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `${port}-${host}`;
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')

        })
  ],
  devServer:{
    static: path.join(__dirname,'dist'),
    port: 3500,
    allowedHosts: "all",
    historyApiFallback: true,
  },
};