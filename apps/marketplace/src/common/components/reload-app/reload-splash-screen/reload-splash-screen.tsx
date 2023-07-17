import type { PropsWithChildren } from 'react'
import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'

export const showSplashScreen = atom(false)

function ReloadSplashScreen({ children }: PropsWithChildren) {
	const isShow = useStore(showSplashScreen)

	if (isShow) return <div>Loading...</div>

	return children
}

export default ReloadSplashScreen
