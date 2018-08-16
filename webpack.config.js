const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');



module.exports = function(env) {
  return ({
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    output: {
          filename: "[name].bundle.js",
          path: path.resolve(__dirname, 'dist'),
    },
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
               }
            },
        ]
    },
    plugins: [
      new UglifyJSPlugin({sourceMap: true}),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
        }),
      new CleanWebpackPlugin(['dist']),
    ],
  });
};
