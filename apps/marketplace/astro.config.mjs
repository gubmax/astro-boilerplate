import nodejs from '@astrojs/node'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'
import unoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
	adapter: nodejs({ mode: 'standalone' }),
	integrations: [react(), unoCSS()],
	output: 'hybrid',
})
