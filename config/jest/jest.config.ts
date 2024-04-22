import type { Config } from 'jest'
import path from 'path'

const config: Config = {
  moduleDirectories: ['node_modules', './src'],
  clearMocks: true,
  globals: {
    IS_DEV: true,
    API_URL: 'http://localhost:4000',
    PROJECT_ENV: 'jest'
  },
  collectCoverage: false,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'svgComponent.tsx')
  },
  modulePathIgnorePatterns: [
    'build',
    'storybook-static',
    '.loki',
    '.husky',
    'info',
    'public'
  ],
  rootDir: '../../',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports',
        filename: 'report.html',
        openReport: false,
        expand: true,
        pageTitle: 'My Test Report'
      }
    ]
  ]
}

export default config
