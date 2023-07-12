import { type ReactNode } from 'react'

import './button.css'

interface Props {
	children: ReactNode
	onClick: () => void
}

function Button({ children, onClick }: Props) {
	return (
		<button className="ui-button" onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
