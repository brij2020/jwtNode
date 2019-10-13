const path  =  require('path');

module.exports  = {
    entry : [ path.resolve(__dirname,'client/src/index.js') ],
    output:{
        filename:'main.js',
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
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }
      
      ]
    }
}