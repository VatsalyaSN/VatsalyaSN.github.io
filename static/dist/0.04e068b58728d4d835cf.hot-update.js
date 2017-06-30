webpackHotUpdate(0,{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redboxReact2 = __webpack_require__(104);

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = __webpack_require__(76);

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = __webpack_require__(4);

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = __webpack_require__(77);

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _ContainerView = __webpack_require__(201);

var _ContainerView2 = _interopRequireDefault(_ContainerView);

var _Login = __webpack_require__(479);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	_component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: '/home/vatsalya/Documents/enterprise/static/src/components/ChatRoomView.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: '/home/vatsalya/Documents/enterprise/static/src/components/ChatRoomView.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

var ChatRoomView = _wrapComponent('_component')(_react3.default.createClass({
	displayName: 'ChatRoomView',
	componentDidMount: function componentDidMount() {
		this.props.getAccessToken();
	},
	render: function render() {
		var _props = this.props,
		    textToReverse = _props.textToReverse,
		    getAgent = _props.getAgent,
		    access_token = _props.access_token,
		    agents = _props.agents,
		    getChat = _props.getChat,
		    chat = _props.chat;

		return _react3.default.createElement(
			'div',
			{ className: 'container-fluid' },
			_react3.default.createElement(Animate, {
				'default': {
					left: 0,
					color: 'blue'
				},
				duration: 2000,
				easing: 'easeElasticOut'
			}),
			_react3.default.createElement(_ContainerView2.default, { getAgent: getAgent, access_token: access_token, agents: agents,
				getChat: getChat, chat: chat })
		);
	}
}));

exports.default = ChatRoomView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (7:3)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m(\n \u001b[90m  6 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\t\t\t)\n \u001b[90m    | \u001b[39m\t\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m\t}\n \u001b[90m  9 | \u001b[39m})\n \u001b[90m 10 | \u001b[39m\u001b[0m\n");

/***/ })

})
//# sourceMappingURL=0.04e068b58728d4d835cf.hot-update.js.map