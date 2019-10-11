const path  =  require('path');

module.exports  = {
    entry : { main : path.resolve(__dirname,'client/src/index.js') },
    output:{
        filename:'[name].js',
        path : path.resolve(__dirname,'dist/')
    },
    mode :"development",
    watch: true,
    module :{
    rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env',"@babel/preset-react"],
              plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
          }
        }
      ]
    }
}