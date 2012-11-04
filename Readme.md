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

## Event Support

[Due to the keypress event being weird](https://github.com/timoxley/keycode/wiki/wtf%3F-keydown-vs-keypress),`keycode `currently does not support the `keypress` event, but this should not be an issue as `keydown` and `keyup` work perfectly fine.

## Credit

Original code lifted from http://jsfiddle.net/vWx8V/ via http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

## License

[MIT](http://opensource.org/licenses/mit-license.php)
