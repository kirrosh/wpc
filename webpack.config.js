const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = function(env) {
  return ({
    devtool: env === 'production' ? 'source-map' : 'cheap-eval-source-map',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
              test: /\.(eot|woff|woff2|ttf)(\?v=\d+\.\d+\.\d+)?/,
              use: {
              loader: 'file-loader',
              options: {
                  limit: 100000,
                  name: 'fonts/[name].[ext]',
                  publicPath: "/",
                },
              },
            }
        ]
    },
    plugins: [
      new UglifyJSPlugin({sourceMap: true}),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, 'public', 'index.html'),
        }),
      new CleanWebpackPlugin(['dist']),
      new BundleAnalyzerPlugin(),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    }
  });
};
