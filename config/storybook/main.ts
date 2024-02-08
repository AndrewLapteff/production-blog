import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/preset-scss'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src')
    ]

    return config
  },
  staticDirs: ['../.././src'],
  docs: {
    autodocs: 'tag'
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  })
}
export default config
