import { memo } from 'react'
import { useStore } from '@nanostores/react'

import { counterStore } from './counter/counter.store'

function CounterState() {
	const counter = useStore(counterStore)
	return <div>Counter state: {counter}</div>
}

export default memo(CounterState)
