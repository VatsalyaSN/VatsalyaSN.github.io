webpackHotUpdate(0,{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.textToReverse = textToReverse;
exports.getAgent = getAgent;
exports.getAccessToken = getAccessToken;
exports.getChat = getChat;

var _axios = __webpack_require__(459);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function textToReverse(item) {
	return {
		type: "REVERSE",
		item: item
	};
}

function agentApi(id) {
	return _axios2.default.get('http://35.154.183.147:5010/api/v1/botsessions?filter=%7B%22where%22%3A%7B%22agentId%22%3A%2258cfeadbbb18880c820e8c72%22%7D%2C%22limit%22%3A500%2C%22order%22%3A%22id%20DESC%22%7D&access_token=' + id + '&access_token=' + id);
}

function addAgentsToStore(arr) {
	return {
		type: "ADD_SESSION",
		arr: arr
	};
}

function getAgent(token) {
	if (token === 0) {
		token = localStorage.getItem('token');
		console.log("vats", token);
	}
	return function (dispatch) {
		return agentApi(token).then(function (response) {
			try {
				response = response["data"].slice(0, 30);
				var arr = [];
				var date = 0;
				var time;
				for (var j = 0; j < response.length; j++) {
					date = new Date(response[j].createdOn);
					date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
					time = date.toString().split(" ");
					arr.push({
						"agentId": response[j].id,
						"userSays": response[j].userSays,
						"createdOn": date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + time[4]
					});
				}
				dispatch(addAgentsToStore(arr));
			} catch (e) {
				console.log(e);
			}
		}).catch(function (error) {
			console.log(error);
		});
	};
}

function getAccess(username, password) {
	return _axios2.default.post('http://35.154.183.147:5010/api/v1/adminusers/login', {
		"username": username,
		"password": password
	});
}

function addToken(id) {
	localStorage.setItem('token', id);
	return {
		type: "ADD_TOKEN",
		id: id
	};
}

function errorHandling() {
	return {
		type: "ERROR_HANDLE"
	};
}

function getAccessToken(username, password) {
	return function (dispatch) {
		return getAccess(username, password).then(function (response) {
			try {
				dispatch(addToken(response["data"].id));
			} catch (e) {
				alert("Error on the server side, please try again later");
			}
		}).catch(function (error) {
			alert("Please check the Username and password enteried!");
			dispatch(errorHandling());
		});
	};
}

function chatWithBot(id, token) {
	return _axios2.default.get('http://35.154.183.147:5010/api/v1/botsessions/' + id + '/botmessage?access_token=' + token + '&access_token=' + token);
}

function addChat(data) {
	return {
		type: "ADD_CHAT",
		data: data
	};
}

function getChat(id, token) {
	console.log("var replies====", token);

	return function (dispatch) {
		return chatWithBot(id, token).then(function (response) {
			try {
				var data = [];
				var userdate, botdate;
				var usertime, bottime;
				for (var i = 1; i < response["data"].length; i = i + 2) {
					userdate = new Date(response["data"][i - 1].createdOn);
					userdate = new Date(userdate.getTime() + userdate.getTimezoneOffset() * 60000);
					usertime = userdate.toString().split(" ");

					botdate = new Date(response["data"][i].createdOn);
					botdate = new Date(botdate.getTime() + botdate.getTimezoneOffset() * 60000);
					bottime = botdate.toString().split(" ");

					data.push({ "user": response["data"][i].userSays,
						"userTime": userdate.getDate() + '-' + userdate.getMonth() + '-' + userdate.getFullYear() + ' ' + usertime[4],
						"bot": response["data"][i]["response"]["replies"][0],
						"botTime": botdate.getDate() + '-' + botdate.getMonth() + '-' + botdate.getFullYear() + ' ' + bottime[4] });
				}
				dispatch(addChat(data));
			} catch (e) {
				console.log(e);
			}
		}).catch(function (error) {
			console.log(error);
		});
	};
}

// candidate@29072017

/***/ })

})
//# sourceMappingURL=0.690859c2a50ff284978a.hot-update.js.map