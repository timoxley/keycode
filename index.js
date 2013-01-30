// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */
exports = module.exports = function (search) {
	if ('string' == typeof search) {
		return codes[search.toLowerCase()]
			|| search.toUpperCase().charCodeAt(0);
	} else {
		return names[search];
	}
}

/**
 * Get by name
 *
 *   exports.code['Enter'] // => 13
 */
var codes = exports.code = {
	'backspace': 8,
	'tab': 9,
	'enter': 13,
	'shift': 16,
	'ctrl': 17,
	'alt': 18,
	'pause/break': 19,
	'caps lock': 20,
	'esc': 27,
	'space': 32,
	'page up': 33,
	'page down': 34,
	'end': 35,
	'home': 36,
	'left': 37,
	'up': 38,
	'right': 39,
	'down': 40,
	'insert': 45,
	'delete': 46,
	'windows': 91,
	'right click': 93,
	'numpad *': 106,
	'numpad +': 107,
	'numpad -': 109,
	'numpad .': 110,
	'numpad /': 111,
	'num lock': 144,
	'scroll lock': 145,
	'my computer': 182,
	'my calculator': 183,
	';': 186,
	'=': 187,
	',': 188,
	'-': 189,
	'.': 190,
	'/': 191,
	'`': 192,
	'[': 219,
	'\\': 220,
	']': 221,
	"'": 222
}

/*!
 * Programatically add the following
 */
for (var i = 48; i < 58; i++) codes[i - 48] = i
// '0': 48,
// '1': 49,
// '2': 50,
// '3': 51,
// '4': 52,
// '5': 53,
// '6': 54,
// '7': 55,
// '8': 56,
// '9': 57,

// for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
// 'a': 65,
// 'b': 66,
// 'c': 67,
// 'd': 68,
// 'e': 69,
// 'f': 70,
// 'g': 71,
// 'h': 72,
// 'i': 73,
// 'j': 74,
// 'k': 75,
// 'l': 76,
// 'm': 77,
// 'n': 78,
// 'o': 79,
// 'p': 80,
// 'q': 81,
// 'r': 82,
// 's': 83,
// 't': 84,
// 'u': 85,
// 'v': 86,
// 'w': 87,
// 'x': 88,
// 'y': 89,
// 'z': 90,

for (i = 1; i < 13; i++) codes['f'+i] = i + 111
// 'f1': 112,
// 'f2': 113,
// 'f3': 114,
// 'f4': 115,
// 'f5': 116,
// 'f6': 117,
// 'f7': 118,
// 'f8': 119,
// 'f9': 120,
// 'f10': 121,
// 'f11': 122,
// 'f12': 123,

for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
// 'numpad 0': 96,
// 'numpad 1': 97,
// 'numpad 2': 98,
// 'numpad 3': 99,
// 'numpad 4': 100,
// 'numpad 5': 101,
// 'numpad 6': 102,
// 'numpad 7': 103,
// 'numpad 8': 104,
// 'numpad 9': 105,

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */
var names = exports.title = {}

// Create reverse mapping
for (i in codes) names[codes[i]] = i
