webpackHotUpdate(0,{

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function handleReverse(state, item) {
	console.log(item);
	var revText = item.split('').reverse().join('');
	console.log("REVERSED ", revText);
	var newArr = {
		data: item,
		reverse: revText
	};
	return [].concat(_toConsumableArray(state), [newArr]);
}

function reverseReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var action = arguments[1];

	switch (action.type) {
		case "ADD_TOKEN":
			return Object.assign({}, state, { access_token: action.id });

		case "ADD_SESSION":
			return Object.assign({}, state, { agents: action.arr });

		case "ADD_CHAT":
			return Object.assign({}, state, { chat: action.data });

		case "ERROR_HANDLE":
			return Object.assign({}, state, { authError: true });

		default:
			return state;
	}
}

exports.default = reverseReducer;

/***/ })

})
//# sourceMappingURL=0.88bc0cdaa8d6d1dcdccb.hot-update.js.map