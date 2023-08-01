// Common configuration applying to client and server configuration

const { generateWebpackConfig, merge } = require('shakapacker')

const baseClientWebpackConfig = generateWebpackConfig()

const commonOptions = {
  resolve: {
      extensions: ['.css', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
          }
        ]
      }
    ]
  }
}

const ignoreWarningsConfig = {
  ignoreWarnings: [/Module not found: Error: Can't resolve 'react-dom\/client'/],
};

// Copy the object using merge b/c the baseClientWebpackConfig and commonOptions are mutable globals
// and safely suppress warning related to requiring react-dom/client in old React projects
const commonWebpackConfig = () => (merge({}, baseClientWebpackConfig, commonOptions, ignoreWarningsConfig))

module.exports = commonWebpackConfig
