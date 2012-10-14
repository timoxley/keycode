# keycode

  Simple map of keyboard codes.

## Installation

```
$ component install timoxley/keycode
```

## Example

```js
var keycode = require('keycode');
document.addEventListener('keydown', function(e) {
  console.log("You pressed", keycode(e.keyCode))
})

```

## API

The `keycode` method responds differently depending on whether you're
looking up a keycode or a keyname.

###keycode(keycode:Number)

Returns name for given numeric keycode.

```js
  console.log(keycode(13)) // => 'Enter'
```

###keycode(name:String)

Returns numeric keycode for given key name.

```js
  console.log(keycode('Enter')) // => 13
```

KeyCode and KeyName maps are available directly as `keycode.keyCodes` and
`keycode.keyNames` respectively.

```js

  console.log(keycode.keyCodes[13]) // => 'Enter'
  console.log(keycode.keyNames['Enter']) // => 13

```

## Note: keydown/keyup vs. keypress

`keypress` event's `keyCode`/`which` property is a different format
to that of `keydown` & `keyup`. Instead of the code of the keyboard event,
it's the character's ASCII code. This also means non display characters
will not be fired on `keypress`. **For this reason, you should not use
`keycode()` with `keypress` events**.

TODO: add logic for extracting values intelligently from a
`KeyboardEvent`.

```js

// Example: Pressing the 'a' key.

document.addEventListener('keydown', function(e) {
  // e.keyCode is 65
  console.log("Key Down", keycode(e.keyCode)) // => 'a' Correct
})

document.addEventListener('keypress', function(e) {
  // e.keyCode is 97
  console.log("Key Press ", keycode(e.keyCode)) // => 'Numpad 1'
Incorrect
})

```

## Credit

Original code lifted from http://jsfiddle.net/vWx8V/ via http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

## License

[MIT](http://opensource.org/licenses/mit-license.php)
