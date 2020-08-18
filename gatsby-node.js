const path = require(`path`)

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()

  config.node = {
    fs: 'empty', // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  }
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom',
    }
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
