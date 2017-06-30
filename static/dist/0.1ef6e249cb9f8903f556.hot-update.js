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


	// componentDidMount(){
	// 	window.onload = function () {
	// 				console.log("VATSALYA")
	//    if (!localStorage.justOnce) {
	//        localStorage.setItem("justOnce", "true");
	//        window.location.reload();
	//    		}
	// 	}
	// },

	renderSessions: function renderSessions() {
		var _this = this;

		return this.props.agents.map(function (item) {
			return _react3.default.createElement(
				"div",
				{ className: "row agentDiv", onClick: function onClick() {
						return _this.props.getChat(item.agentId, _this.props.access_token);
					} },
				_react3.default.createElement(
					"p",
					{ className: "col-md-7 col-lg-7 agentRows" },
					item.agentId
				),
				_react3.default.createElement(
					"p",
					{ className: "col-lg-5 col-md-5 time" },
					item.createdOn,
					_react3.default.createElement("span", { className: "rightChevron glyphicon glyphicon-chevron-right" })
				)
			);
		});
	},
	renderChat: function renderChat() {
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
					"div",
					{ className: "col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8" },
					_react3.default.createElement(
						"p",
						{ className: "usertime" },
						item.userTime
					)
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
			null,
			_react3.default.createElement(
				"div",
				{ className: "col-md-12 col-lg-12 firstRow" },
				_react3.default.createElement("span", { className: "glyphicon glyphicon-menu-hamburger ham" }),
				_react3.default.createElement("img", { src: "http://res.cloudinary.com/dfimz9dwy/image/upload/v1498807936/brand-logo_ttkxeb.svg", className: "img-responsive brandLogo" })
			),
			_react3.default.createElement(
				"div",
				{ className: "tDiv", id: "tDiv" },
				_react3.default.createElement(
					"p",
					{ className: "col-md-12 col-lg-12 buttonclass" },
					"Categories"
				),
				_react3.default.createElement(
					"p",
					{ className: "col-md-12 col-lg-12 buttonclass subcat", onClick: function onClick() {
							return _this2.props.getAgent(_this2.props.access_token);
						} },
					"Chat List ",
					_react3.default.createElement("span", { className: "rightChevron glyphicon glyphicon-chevron-right" })
				)
			),
			_react3.default.createElement(
				"div",
				{ className: "col-md-5 col-lg-5 training border" },
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
						{ className: "col-lg-7 col-md-7 agentRowshead" },
						"Session"
					),
					_react3.default.createElement(
						"p",
						{ className: "col-lg-5 col-md-5 timehead" },
						"Created time"
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
				{ className: "col-md-7 col-lg-7 chatSession border" },
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
//# sourceMappingURL=0.1ef6e249cb9f8903f556.hot-update.js.map