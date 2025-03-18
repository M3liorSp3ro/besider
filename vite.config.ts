import { URL, fileURLToPath } from "url";

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { CssModuleTypes } from "./watching-css-modules";


interface IViteConfigInput {
  mode: string,
  command: string
}

// https://vitejs.dev/config/
export default (args: IViteConfigInput) => {

  const generateScopedName = args.mode === 'production' ? '[hash:base64:6]' : '[name]_[local]_[hash:base64:2]'

  return defineConfig({
    plugins: [
      react(),
      CssModuleTypes(),
    ],
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '@app', replacement: fileURLToPath(new URL('./src/app', import.meta.url)) },
        { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
        { find: '@widgets', replacement: fileURLToPath(new URL('./src/widgets', import.meta.url)) },
        { find: '@features', replacement: fileURLToPath(new URL('./src/features', import.meta.url)) },
        { find: '@entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url)) },
        { find: '@shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
      ],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      }
    },
  })
} 
