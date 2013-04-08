var keycode = require('keycode')
var assert = require('timoxley-assert')

it('can return a charcode from a letter', function() {
  assert.strictEqual(keycode('0'), 48);
  assert.strictEqual(keycode('B'), 66);
  assert.strictEqual(keycode('f1'), 112);
  assert.strictEqual(keycode('9'), 57);
  assert.strictEqual(keycode('numpad 0'), 96);
})

it('is case insensitive', function() {
  assert.strictEqual(keycode('a'), 65);
  assert.strictEqual(keycode('A'), 65);
  assert.strictEqual(keycode('enter'), 13);
  assert.strictEqual(keycode('ENTER'), 13);
  assert.strictEqual(keycode('enTeR'), 13);
})

it('returns char code for strange chars', function() {
  // TODO: not sure if this is sensible behaviour
  assert.strictEqual(keycode('∆'), 8710);
  assert.strictEqual(keycode('漢'), 28450);
})

it('returns undefined for unknown strings', function() {
  assert.strictEqual(keycode('ants'), undefined);
  assert.strictEqual(keycode('Bagels'), undefined);
  assert.strictEqual(keycode(''), undefined);
  assert.strictEqual(keycode('JKHG KJG LSDF'), undefined);
})

it('returns undefined for unknown numbers', function() {
  assert.strictEqual(keycode(-1), undefined);
  assert.strictEqual(keycode(Infinity), undefined);
  assert.strictEqual(keycode(0.3), undefined);
  assert.strictEqual(keycode(9999999), undefined);
})

it('returns code for objects implementing toString function', function() {
  var obj = {}
  obj.toString = function() {
    return 'a'
  }
  assert.strictEqual(keycode(obj), 65);
})

it('returns char for objects with a keyCode property', function() {
  var obj = { keyCode: 65 }
  assert.strictEqual(keycode(obj), 'a');
})

it('returns undefined for any other passed in type', function() {
  assert.strictEqual(keycode({}), undefined);
  assert.strictEqual(keycode([]), undefined);
  assert.strictEqual(keycode([1,2]), undefined);
  assert.strictEqual(keycode(null), undefined);
  assert.strictEqual(keycode(undefined), undefined);
  assert.strictEqual(keycode(/.*/), undefined);
  assert.strictEqual(keycode(), undefined);
})

it('is commutative', function() {
  var count = 0
  for (var key in keycode.code) {
    assert.strictEqual(key, keycode(keycode(key)))
    count++
  }
  console.debug('Tested %d keys', count)
})

it('exposes keycode/name maps', function() {
  var count = 0
  for (var code in keycode.codes) {
    assert.strictEqual(code, keycode.names[keycode.codes[code]])
    count++
  }
  console.debug('Tested %d keys', count)
})

