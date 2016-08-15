var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    debug: true,
    devtool: 'source-map',
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
          {
            test: /(\.js$|\.jsx$)/, 
            exclude: /node_modules/, 
            loader: "eslint-loader"
          }
        ],
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.woff2?$/, loader: "url-loader?limit=25000" },
            { test: /\.(eot|svg|ttf)?$/, loader: "file-loader" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    eslint: {
      configFile: '.eslintrc.yml'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
