import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true
		})
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/components/index.ts'),
			name: 'ui-kit',
			formats: ['es', 'umd'],
			fileName: (format) => `ui-kit.${format}.js`
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		}
	},
	publicDir: 'src/assets'
})
