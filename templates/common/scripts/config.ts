import path from 'path'
import { defineConfig } from 'vite'

const framework = '<%= framework %>'

const toPascalCase = (str: string) => {
  return str.split(/[-|_]/).map((element) => {
    if (!element) return element
    return `${element[0].toUpperCase()}${element.substr(1)}`
  }).join('')
}

export const buildConfig = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: toPascalCase('<%= projectName %>'),
    },
    ...framework !== 'vanilla' ? {
      rollupOptions: {
        external: [framework],
        output: {
          globals: {
            [framework]: toPascalCase(framework),
          },
        },
      },
    } : {},
  },
})

export const buildDocsConfig = defineConfig({
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, 'demo/index.html'),
    },
    outDir: 'docs',
  },
})
