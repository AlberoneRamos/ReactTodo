var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
    envFile(path.join(__dirname,'config/'+process.env.NODE_ENV+'.env'));
} catch(e){

}

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
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID)
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
    devtool: process.env.NODE_ENV == 'production' ? undefined : 'inline-source-map',
    devServer: {
      historyApiFallback: true
  }
};