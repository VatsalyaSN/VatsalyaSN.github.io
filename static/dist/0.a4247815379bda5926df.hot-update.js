webpackHotUpdate(0,{

/***/ 479:
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
	filename: "/home/vatsalya/Documents/enterprise/static/src/components/Login.js",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
	filename: "/home/vatsalya/Documents/enterprise/static/src/components/Login.js",
	components: _components,
	locals: [],
	imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
	};
}

var Login = _wrapComponent("_component")(_react3.default.createClass({
	displayName: "Login",
	render: function render() {
		return _react3.default.createElement(
			"div",
			{ className: "container" },
			_react3.default.createElement(
				"div",
				{ className: "row" },
				_react3.default.createElement("div", { className: "col-lg-7 col-md-7 col-sm-7 col-xs-7" }),
				_react3.default.createElement(
					"div",
					{ className: "col-xs-5 col-sm-5 col-md-5 col-lg-5 jumbotron" },
					_react3.default.createElement(
						"label",
						null,
						"Login"
					),
					_react3.default.createElement(
						"div",
						{ className: "form-group" },
						_react3.default.createElement(
							"label",
							{ htmlFor: "usr" },
							"Name:"
						),
						_react3.default.createElement("input", { type: "text", className: "form-control", id: "usr" })
					),
					_react3.default.createElement(
						"div",
						{ className: "form-group" },
						_react3.default.createElement(
							"label",
							{ htmlFor: "pwd" },
							"Password:"
						),
						_react3.default.createElement("input", { type: "password", className: "form-control", id: "pwd" })
					)
				)
			)
		);
	}
}));

exports.default = Login;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ })

})
//# sourceMappingURL=0.a4247815379bda5926df.hot-update.js.map