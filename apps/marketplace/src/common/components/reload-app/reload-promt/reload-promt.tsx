import { memo } from 'react'
import { useStore } from '@nanostores/react'
import { atom } from 'nanostores'
import Button from 'ui/components/button/button.js'

import { refreshSW } from '../pwa.js'
import './reload-promt.css'

export const showReloadPromt = atom(false)

function closeReloadPromt() {
	showReloadPromt.set(false)
}

function ReloadPromt() {
	const isShow = useStore(showReloadPromt)

	if (!isShow) return null

	return (
		<div
			className="m-reload-promt flex gap-5 justify-center items-center"
			role="alert"
			aria-labelledby="toast-message"
		>
			<Button onClick={refreshSW}>Reload</Button>
			<Button onClick={closeReloadPromt}>Close</Button>
		</div>
	)
}

export default memo(ReloadPromt)
