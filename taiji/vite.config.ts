import { defineConfig } from 'vite'
import fs from 'fs';
import vue from '@vitejs/plugin-vue'
import { ViteRsw } from 'vite-plugin-rsw';
import { release } from 'os';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('./.cert/key.pem'),
      cert: fs.readFileSync('./.cert/cert.pem'),
    },
  },
  plugins: [
    vue(),
    ViteRsw({
      // mode: 'release',
      crates: [
        { 
          name: 'wasm_taiji',
          outDir: 'pkg'
        }
      ]
    })
  ]
})




