import path from "path"
import { defineConfig } from "vite"
import dts from 'vite-plugin-dts'
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'rpa-node',
      fileName: (format) => `index.${format}.js`
    },
    sourcemap: false
  },
  plugins: [dts({  outputDir:path.resolve(__dirname, './dist/type/'),})]
})