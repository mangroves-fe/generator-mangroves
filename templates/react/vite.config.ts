  
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

import { buildConfig, buildDocsConfig } from './scripts/config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    ...mode === 'docs' ? buildDocsConfig : buildConfig,
    root: './demo',
    plugins: [reactRefresh()],
  }
})
