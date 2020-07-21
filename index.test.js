import test from 'ava'
import {debounce} from './index'

test.cb('callback is called after delay', t => {
	t.plan(1)
	const fn = debounce(() => t.pass(), 100)

	fn()
	setTimeout(() => t.end(), 101)
})

test.cb('is cancellable', t => {
	const fn = debounce(() => t.fail(), 0)

	const id = fn()
	clearTimeout(id)
	setTimeout(() => t.end(), 10)
})

test.cb('cancels previous call', t => {
	const fn = debounce(x => {
		t.true(x)
		t.end()
	}, 100)

	fn(false)
	fn(true)
})
