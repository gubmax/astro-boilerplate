import { memo, useState } from 'react'
import Button from 'ui/button.js'

import './Counter.css'

interface Props {
	count: number
}

function Counter({ count: initialCount }: Props) {
	const [count, setCount] = useState(initialCount)

	const add = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<div className="counter">
			<Button onClick={subtract}>-</Button>
			<pre>{count}</pre>
			<Button onClick={add}>+</Button>
		</div>
	)
}

export default memo(Counter)
