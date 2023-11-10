import { memo, type PropsWithChildren } from 'react'

import ReloadPromt from './reload-promt/reload-promt.js'
import ReloadSplashScreen from './reload-splash-screen/reload-splash-screen.js'

import './pwa.js'

function ReloadApp({ children }: PropsWithChildren) {
	return (
		<>
			<ReloadSplashScreen>{children}</ReloadSplashScreen>
			<ReloadPromt />
		</>
	)
}

export default memo(ReloadApp)
