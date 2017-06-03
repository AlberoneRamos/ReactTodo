var webpack = require('webpack');
var path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
     entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
                app: './app/',
            }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0'],
                    plugins: ['inferno']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            },
            { 
                test: /\.css$/, 
                loader: "style-loader!css-loader" 
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'inline-source-map',
    devServer: {
      historyApiFallback: true
  }
};