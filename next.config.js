const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withImages(withSass({
  /* config options here */
  cssModules: true
}))