import { defineConfig } from 'tsup'
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths'

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
  dts: false,
  esbuildPlugins: [TsconfigPathsPlugin({ tsconfig: './tsconfig.json' })]
})
