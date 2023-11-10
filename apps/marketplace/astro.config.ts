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
	scopedStyleStrategy: 'attribute',
	prefetch: { defaultStrategy: 'hover' },
	build: { inlineStylesheets: 'auto' },
	vite: {
		build: {
			assetsInlineLimit: 4096,
			cssCodeSplit: false,
			rollupOptions: { output: { esModule: false } },
		},
	},
	integrations: [
		react(),
		// @ts-expect-error Wrong export for NodeNext modules
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
