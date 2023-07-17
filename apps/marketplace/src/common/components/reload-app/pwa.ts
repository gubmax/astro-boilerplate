import { registerSW } from 'virtual:pwa-register'

import { showReloadPromt } from './reload-promt/reload-promt'
import { showSplashScreen } from './reload-splash-screen/reload-splash-screen'

// const SW_UPDATE_INTERVAL = import.meta.env.VITE_SW_UPDATE_INTERVAL
const SW_UPDATE_INTERVAL = 2000
let enableReloadPromt = false

const refresh = registerSW({
	immediate: true,
	onRegisteredSW(_, registration) {
		if (!SW_UPDATE_INTERVAL) return

		setInterval(() => {
			enableReloadPromt = true
			void registration?.update()
		}, SW_UPDATE_INTERVAL)
	},
	onNeedRefresh() {
		if (!enableReloadPromt) {
			showSplashScreen.set(true)
			void refresh(true)
			return
		}

		showReloadPromt.set(true)
	},
	onOfflineReady() {
		showSplashScreen.set(false)
	},
})

export function refreshSW() {
	showReloadPromt.set(false)
	showSplashScreen.set(true)
	void refresh(true)
}
