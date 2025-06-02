import { join, dirname } from 'path'
import { StorybookConfig } from '@storybook/react-webpack5'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const storybookConfig: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },
  webpackFinal: async (config: any) => {
    config.module.rules.push({
      loader: 'babel-loader',
      test: /\.(ts|tsx)$/
    })
    return config
  }
}
export default storybookConfig
