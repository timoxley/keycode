var keycode = require('keycode')
var assert = require('timoxley-assert')
it('is commutative', function() {
	var count = 0
	for (var key in keycode.code) {
		assert.strictEqual(key, keycode(keycode(key)))
		count++
	}
	console.debug('Tested %d keys', count)
})
it('can expose maps', function () {
	var count = 0
	for (var name in keycode.code) {
		assert.strictEqual(name, keycode.title[keycode.code[name]])
		count++
	}
	console.debug('Tested %d keys', count)
})

it('can return a charcode from a letter', function(){
	assert.strictEqual(keycode('a'), 65);
	assert.strictEqual(keycode('b'), 66);
})
