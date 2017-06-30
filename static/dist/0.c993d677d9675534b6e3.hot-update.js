webpackHotUpdate(0,{

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxLogger = __webpack_require__(441);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = __webpack_require__(203);

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(64);

var _reactRouterRedux = __webpack_require__(114);

var _reactRouter = __webpack_require__(121);

var _reduxThunk = __webpack_require__(477);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultState = {
	reverse: {
		access_token: 0,
		agents: [],
		chat: []
	}

};
// import listOfEvents from './data/listOfEvents';


var store = (0, _redux.createStore)(_index2.default, defaultState, (0, _redux.applyMiddleware)(_reduxLogger2.default, _reduxThunk2.default));

store.subscribe(function () {
	return console.log("store changed", store.getState());
});

exports.default = store;

/***/ })

})
//# sourceMappingURL=0.c993d677d9675534b6e3.hot-update.js.map