import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  format: ['cjs'],
  outDir: 'dist',
  target: 'es2023',
  clean: true,
  minify: true,
  sourcemap: true,
  splitting: false,
  skipNodeModulesBundle: true,
  dts: false
})
