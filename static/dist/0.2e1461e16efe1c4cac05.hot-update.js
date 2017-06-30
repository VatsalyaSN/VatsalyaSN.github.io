webpackHotUpdate(0,{

/***/ 206:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(206)();
// imports


// module
exports.push([module.i, "* {\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n}\n.border {\n  border-right: 1px solid #c0c0c0;\n  height: 100vh;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.heading1 {\n  background-color: #2c475c;\n  padding: 10px 0 10px 15px;\n  color: #fff;\n}\n.bottomBorder {\n  border: 1px solid #c0c0c0;\n}\n.heading2 {\n  background-color: #2c475c;\n  padding: 10px 0 10px 15px;\n  color: #fff;\n}\n.heading3 {\n  background-color: #2c475c;\n  padding: 10px 0 12px 15px;\n  color: #fff;\n}\n.hfont {\n  font-size: 130%;\n}\n.agentRows:hover {\n  cursor: pointer;\n}\n.user {\n  float: right;\n  border: 1px solid #c0c0c0;\n  background-color: #0080ff;\n  color: #fff;\n  padding: 5px 6px 5px 6px;\n  display: block;\n  border-radius: 0.5em 0 0.5em 0.5em;\n  margin: 0 !important;\n}\n.bot {\n  float: left;\n  background-color: #c0c0c0;\n  color: #000;\n  display: block;\n  padding: 5px 6px 5px 6px;\n  border-radius: 0 0.5em 0.5em 0.5em;\n  margin: 0 !important;\n}\n.userDiv {\n  margin-bottom: 2px;\n}\n.chatDiv {\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n.chat,\n.sessionDiv {\n  height: 84vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.chat {\n  margin-top: 5px;\n}\n.sessionDiv {\n  height: 84vh;\n}\n.usertime {\n  float: right;\n}\n.bottime {\n  float: left;\n}\n.time {\n  padding-left: 8%;\n}\n.agentDiv {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  margin: 0 !important;\n  border: 1px solid #c0c0c0;\n  padding-top: 8px;\n}\n.agentDiv:hover {\n  cursor: pointer;\n}\n.agentDivHeading,\n.agentRowshead,\n.timehead {\n  padding-top: 5px;\n  padding-bottom: 4px;\n  margin: 0 !important;\n}\n.buttonclass {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 15px;\n  color: #fff;\n  background-color: #0080ff;\n}\n.buttonclass:hover {\n  cursor: pointer;\n}\n.rightChevron,\n.downChevron {\n  float: right;\n  color: #c0c0c0;\n}\n.style-2::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 10px;\n  background-color: #f5f5f5;\n}\n.style-2::-webkit-scrollbar {\n  width: 10px;\n  background-color: #f5f5f5;\n}\n.style-2::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  background-color: #c0c0c0;\n}\n@media screen and (min-width: 1300px) {\n  .usertime {\n    margin-right: -3%;\n  }\n}\n.jumbotron {\n  margin-top: 100px;\n}\n.loginh {\n  padding-bottom: 10px;\n}\n.loginContainer {\n  background-color: #3f3861;\n}\n.brandLogo {\n  margin-top: 50%;\n}\n", ""]);

// exports


/***/ })

})
//# sourceMappingURL=0.2e1461e16efe1c4cac05.hot-update.js.map