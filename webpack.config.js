const path = require('path')

// ,
//       {
//           test: /\.(jpg|jpeg|gif|png)$/,
//           exclude: /node_modules/,
//           loader:'url-loader',
//           options: {
//             'limit':'1024',
//             'name':'assets/img/[name].[ext]'
//           }
//       },
//       {
//           test: /\.(woff|woff2|eot|ttf|svg)$/,
//           exclude: /node_modules/,
//           loader: 'url-loader',
//           options: {
//             'limit':'1024',
//             'name':'assets/fonts/[name].[ext]'
//           }
//       }

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs/webpack_output')//dist before
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}