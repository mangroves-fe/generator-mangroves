import Generator from 'yeoman-generator'

import { IAnswers } from './types'

export enum FRAMEWORK_ENUM {
  VANILLA = 'vanilla',
  VUE = 'vue',
  REACT = 'react',
}

export const questions: Generator.Questions<IAnswers> = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Your project name',
  },
  {
    type: 'list',
    name: 'framework',
    message: 'Choose a framework or just use vanilla JavaScript',
    choices: Object.values(FRAMEWORK_ENUM),
  },
]

export const commonDevDependencies = [
  // commitlint
  '@commitlint/cli',
  '@commitlint/config-conventional',
  'husky',

  // eslint
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',

  // jest
  '@types/jest',
  'jest',
  'ts-jest',

  // typescript
  'typescript',

  // vite
  'vite',
]

const vueDependencies = ['vue@next']

const vueDevDependencies = [
  '@vitejs/plugin-vue',
  '@vue/compiler-sfc',
  '@vuedx/typecheck',
  '@vuedx/typescript-plugin-vue',
]

const reactDependencies = ['react', 'react-dom']

const reactDevDependencies = [
  '@types/react',
  '@types/react-dom',
  '@vitejs/plugin-react-refresh',
]

export const dependencyMap = {
  [FRAMEWORK_ENUM.VANILLA]: {
    dependencies: [],
    devDependencies: [],
  },
  [FRAMEWORK_ENUM.VUE]: {
    dependencies: vueDependencies,
    devDependencies: vueDevDependencies,
  },
  [FRAMEWORK_ENUM.REACT]: {
    dependencies: reactDependencies,
    devDependencies: reactDevDependencies,
  },
}
