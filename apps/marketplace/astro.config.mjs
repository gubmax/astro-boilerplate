import nodejs from '@astrojs/node'
import react from '@astrojs/react'
import astroPWA from '@vite-pwa/astro'
import { defineConfig } from 'astro/config'
import unoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: nodejs({ mode: 'standalone' }),
	compressHTML: true,
	build: { inlineStylesheets: 'auto' },
	vite: {
		build: {
			assetsInlineLimit: true,
			cssCodeSplit: false,
			rollupOptions: { output: { esModule: false } },
		},
	},
	integrations: [
		react(),
		unoCSS(),
		astroPWA({
			base: '/',
			registerType: 'prompt',
			includeAssets: ['favicon.svg'],
			manifest: {
				name: 'Acme Marketplace',
				short_name: 'Acme',
			},
		}),
	],
})
