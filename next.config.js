const withImages = require('next-images')
const webpack = require('webpack');

module.exports = withImages({
  esModule: true,
})


// module.exports = {
//   entry: './src/_app.tsx',
//   module: {
//     rules: [
//       //...
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [{
//           loader: 'file-loader',
//           options: {
//             name: 'images/[hash]-[name].[ext]',
//           },
//         }, ],
//       },
//     ],
//   },
//   //...
// };
