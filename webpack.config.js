var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx',
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            '$': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        alias: {
          Main: path.resolve(__dirname, "app/components/Main.jsx"), 
          Timer: path.resolve(__dirname, "app/components/Timer.jsx"), 
          Countdown: path.resolve(__dirname, "app/components/Countdown.jsx"), 
          Clock: path.resolve(__dirname, "app/components/Clock.jsx"), 
          Navigation: path.resolve(__dirname, "app/components/Nav.jsx"), 
          applicationStyles: path.resolve(__dirname, "app/styles/app.scss"),
        },
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'eval'
};