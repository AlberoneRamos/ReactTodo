var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
    config.set({
        browsers: [
            'ChromeBackground'
        ],
        customLaunchers: {
            ChromeBackground: {
                base: 'Chrome',
                flags: ['--window-size=0,0']
            }
        },
        singleRun: true,
        frameworks: ['mocha'],
        files:[
            'script-loader!jquery/dist/jquery.min.js',
            'script-loader!foundation-sites/dist/js/foundation.min.js',
            'app/tests/**/*.test.jsx'
        ],
        preprocessors:{
            'app/tests/**/*.test.jsx':['webpack','sourcemap']
        },
        reporters: ['mocha'],
        client:{
            
            mocha:{
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer:{
            noInfo: true
        }
    });
}