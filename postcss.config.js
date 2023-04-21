module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
