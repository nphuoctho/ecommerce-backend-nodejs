import { defineConfig } from 'tsup'
import tsconfigPaths from 'tsconfig-paths'

tsconfigPaths.register()

export default defineConfig({
  entry: ['src'],
  format: ['cjs'],
  outDir: 'dist',
  target: 'es2023',
  bundle: false,
  clean: true,
  minify: true,
  sourcemap: true,
  splitting: false,
  skipNodeModulesBundle: true,
  dts: false
})
