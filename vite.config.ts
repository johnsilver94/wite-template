import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/components'),
			'@store': resolve(__dirname, './src/store'),
			'@styles': resolve(__dirname, './src/styles'),
			'@views': resolve(__dirname, './src/views'),
			'@': resolve(__dirname, './src'),
		},
	},
	plugins: [vue()],
})
