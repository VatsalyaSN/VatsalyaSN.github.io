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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	_component: {}
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	filename: "/home/vatsalya/Documents/enterprise/static/src/components/ContainerView.js",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: "/home/vatsalya/Documents/enterprise/static/src/components/ContainerView.js",
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

var ContainerView = _wrapComponent("_component")(_react3.default.createClass({
	displayName: "ContainerView",
	renderSessions: function renderSessions() {
		var _this = this;

		console.log("HELP ******************");
		return this.props.agents.map(function (item) {
			return _react3.default.createElement(
				"div",
				{ className: "row agentDiv", onClick: function onClick() {
						return _this.props.getChat(item.agentId, _this.props.access_token);
					} },
				_react3.default.createElement(
					"p",
					{ className: "col-lg-5 agentRows" },
					item.agentId
				),
				_react3.default.createElement(
					"p",
					{ className: "col-lg-7 time" },
					item.createdOn,
					_react3.default.createElement("span", { className: "rightChevron glyphicon glyphicon-chevron-right" })
				)
			);
		});
	},
	renderChat: function renderChat() {
		console.log("KKKKKKKK");
		return this.props.chat.map(function (item) {
			return _react3.default.createElement(
				"div",
				{ className: "chatDiv" },
				_react3.default.createElement(
					"div",
					{ className: "userDiv col-lg-10 col-lg-offset-2" },
					_react3.default.createElement(
						"p",
						{ className: "user" },
						" ",
						item.user
					)
				),
				_react3.default.createElement(
					"p",
					{ className: "usertime col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-5 col-sm-offset-7 col-xs-6 col-xs-offset-6" },
					item.userTime
				),
				_react3.default.createElement(
					"div",
					{ className: "botDiv col-lg-10" },
					_react3.default.createElement(
						"p",
						{ className: "bot" },
						item.bot
					)
				),
				_react3.default.createElement(
					"p",
					{ className: "bottime col-lg-5 col-md-5" },
					item.botTime
				)
			);
		});
	},
	render: function render() {
		var _this2 = this;

		return _react3.default.createElement(
			"div",
			{ className: "row" },
			_react3.default.createElement(
				"div",
				{ className: "col-md-2 col-lg-2 col-sm-2 col-xs-2 border" },
				_react3.default.createElement(
					"div",
					{ className: "heading1" },
					_react3.default.createElement("span", { className: "glyphicon glyphicon-menu-hamburger ham" })
				),
				_react3.default.createElement(
					"div",
					{ className: "tDiv" },
					_react3.default.createElement(
						"p",
						{ className: "col-md-12 col-lg-12 col-sm-12 col-xs-12 buttonclass", onClick: function onClick() {
								return _this2.props.getAgent(_this2.props.access_token);
							} },
						"Training"
					)
				)
			),
			_react3.default.createElement(
				"div",
				{ className: "col-md-4 col-lg-4 col-sm-4 col-xs-4 border" },
				_react3.default.createElement(
					"div",
					{ className: "heading2" },
					_react3.default.createElement("span", { className: "glyphicon glyphicon-th-list" }),
					_react3.default.createElement(
						"span",
						{ className: "hfont" },
						" Training"
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "row agentDivHeading" },
					_react3.default.createElement(
						"p",
						{ className: "col-lg-5 col-md-5 col-sm-5 col-xs-5 agentRowshead" },
						"Session"
					),
					_react3.default.createElement(
						"p",
						{ className: "col-lg-7 col-md-7 col-sm-7 col-xs-7 timehead" },
						"Time"
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "sessionDiv style-2" },
					this.renderSessions()
				)
			),
			_react3.default.createElement(
				"div",
				{ className: "col-md-6 col-lg-6 col-sm-6 col-xs-6 border" },
				_react3.default.createElement(
					"div",
					{ className: "heading3" },
					_react3.default.createElement(
						"span",
						{ className: "glyphicon glyphicon-comment" },
						" ",
						_react3.default.createElement(
							"span",
							{ className: "hfont" },
							"ChatSession"
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "chat style-2" },
					this.renderChat()
				)
			)
		);
	}
}));

exports.default = ContainerView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ })

})
//# sourceMappingURL=0.c924782ab95b38bc0149.hot-update.js.map