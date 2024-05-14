import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import { DefinePlugin, RuleSetRule } from 'webpack'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-themes'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  webpackFinal: async (config, { configType }) => {
    if (
      config?.resolve?.extensions &&
      config?.module?.rules &&
      config.plugins
    ) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '../src')
      ]
      config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
      config.resolve.extensions.push('.tsx', '.ts', '.js')

      const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack']
      }

      // @ts-expect-error
      config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // @ts-expect-error
        if (/svg/.test(rule.test)) {
          return { ...rule, exclude: /\.svg$/i }
        }
        return rule
      })

      config.plugins.push(
        new DefinePlugin({
          IS_DEV: JSON.stringify(false),
          API_URL: JSON.stringify(''),
          PROJECT_ENV: JSON.stringify('storybook')
        })
      )

      config.module.rules.push(svgLoader)
      return config
    } else {
      return config
    }
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
