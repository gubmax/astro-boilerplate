import { memo, type PropsWithChildren } from 'react'

import ReloadPromt from './reload-promt/reload-promt'
import ReloadSplashScreen from './reload-splash-screen/reload-splash-screen'

import './pwa'

function ReloadApp({ children }: PropsWithChildren) {
	return (
		<>
			<ReloadSplashScreen>{children}</ReloadSplashScreen>
			<ReloadPromt />
		</>
	)
}

export default memo(ReloadApp)
