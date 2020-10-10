const withImages = require('next-images')
const webpack = require('webpack');

module.exports = withImages({
  esModule: true,
})

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
