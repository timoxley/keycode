var keycode = require('keycode')
var assert = require('timoxley-assert')
it('is commutative', function() {
	var count = 0
	for (var key in keycode.code) {
		assert.strictEqual(keycode(key), keycode(keycode(keycode(key))))
		count++
	}
	console.debug('Tested %d keys', count)
})
