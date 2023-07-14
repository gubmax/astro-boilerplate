import { atom } from 'nanostores'

export const counterStore = atom<number>(10)

export function increaseCounter() {
	counterStore.set(counterStore.get() + 1)
}

export function decreaseCounter() {
	counterStore.set(counterStore.get() - 1)
}
