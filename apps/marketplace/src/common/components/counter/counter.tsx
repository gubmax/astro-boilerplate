import { memo, useState } from 'react'
import Button from 'ui/components/button/button.js'
import { cn } from 'ui/helpers/class-names.js'
import { type StyledProps } from 'ui/typings/styled-props.js'

import './counter.css'

interface Props extends StyledProps {
	count: number
}

function Counter({ count: initialCount, className, style }: Props) {
	const [count, setCount] = useState(initialCount)

	const add = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<div className={cn('m-counter', className)} style={style}>
			<Button onClick={subtract}>-</Button>
			<pre className="mx-8">{count}</pre>
			<Button onClick={add}>+</Button>
		</div>
	)
}

export default memo(Counter)
