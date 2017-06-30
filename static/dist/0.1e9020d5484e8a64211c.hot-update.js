webpackHotUpdate(0,{

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(108);

var _actionCreator = __webpack_require__(106);

var actionCreators = _interopRequireWildcard(_actionCreator);

var _store = __webpack_require__(205);

var _store2 = _interopRequireDefault(_store);

var _reactRedux = __webpack_require__(109);

var _style = __webpack_require__(458);

var _style2 = _interopRequireDefault(_style);

var _App = __webpack_require__(199);

var _App2 = _interopRequireDefault(_App);

var _ChatRoomView = __webpack_require__(200);

var _ChatRoomView2 = _interopRequireDefault(_ChatRoomView);

var _reactRouter = __webpack_require__(121);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/", component: _App2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: Login })
		)
	)
);

var rendered = function rendered() {
	(0, _reactDom.render)(router, document.getElementById('root'));
};

_store2.default.subscribe(rendered);

rendered();

/***/ })

})
//# sourceMappingURL=0.1e9020d5484e8a64211c.hot-update.js.map