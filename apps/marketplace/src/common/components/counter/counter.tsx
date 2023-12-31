import { memo } from 'react'
import { useStore } from '@nanostores/react'
import Button from 'ui/components/button/button.js'
import { cn } from 'ui/helpers/class-names.js'
import { type StyledProps } from 'ui/typings/styled-props.js'

import { counterStore, decreaseCounter, increaseCounter } from './counter.store.js'
import './counter.css'

function Counter({ className, style }: StyledProps) {
	const counter = useStore(counterStore)

	return (
		<div className={cn('m-counter', className)} style={style}>
			<Button onClick={decreaseCounter}>-</Button>
			<span className="mx-8">{counter}</span>
			<Button onClick={increaseCounter}>+</Button>
		</div>
	)
}

export default memo(Counter)
