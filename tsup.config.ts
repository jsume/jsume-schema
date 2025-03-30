import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/validator.ts',
  ],
  shims: true,
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
})
