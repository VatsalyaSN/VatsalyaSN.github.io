webpackHotUpdate(0,{

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(64);

var _reactRedux = __webpack_require__(109);

var _actionCreator = __webpack_require__(106);

var actionCreators = _interopRequireWildcard(_actionCreator);

var _Main = __webpack_require__(202);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapStateToProps(state) {
	return {
		access_token: state.reverse.access_token,
		agents: state.reverse.agents,
		chat: state.reverse.chat,
		authError: state.reverse.authError
	};
}

function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)(actionCreators, dispatch);
}

var App = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Main2.default);

exports.default = App;

/***/ })

})
//# sourceMappingURL=0.76eb9f883862745caba4.hot-update.js.map