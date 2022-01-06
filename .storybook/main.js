module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  framework: '@storybook/react',
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg')
    return options
  },
  core: {
    builder: 'webpack5',
  },
}
