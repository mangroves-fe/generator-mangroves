import { defineConfig } from 'vite'

import { buildConfig, buildDocsConfig } from './scripts/config'

export default defineConfig(({ mode }) => {
  return {
    ...mode === 'docs' ? buildDocsConfig : buildConfig,
    root: './demo',
  }
})
