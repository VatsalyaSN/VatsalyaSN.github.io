import axios from 'axios';

export function textToReverse(item){
	return{
		type:"REVERSE",
		item
	}
}

function agentApi(id){
	return axios.get('http://35.154.183.147:5010/api/v1/botsessions?filter=%7B%22where%22%3A%7B%22agentId%22%3A%2258cfeadbbb18880c820e8c72%22%7D%2C%22limit%22%3A500%2C%22order%22%3A%22id%20DESC%22%7D&access_token='+id+'&access_token='+id)
}

function addAgentsToStore(arr){
	return {
		type : "ADD_SESSION",
		arr
	}
}

export function getAgent(token){
	return function(dispatch) {
		return agentApi(token)
		.then(response =>{
			try{
				console.log(response)
				response = response["data"].slice(0,30);
				console.log(response.toString())
				var arr=[];
				var date = 0;
				var time;
				for(var j=0;j<response.length;j++){
					date = new Date(response[j].createdOn);
					date = new Date( date.getTime() + ( date.getTimezoneOffset() * 60000 ) );
					time = date.toString().split(" ");
					arr.push({
						"agentId" : response[j].id,
						"userSays" : response[j].userSays,
						"createdOn" : date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+' '+time[4]
					})

				}
				dispatch(addAgentsToStore(arr))
			}
			catch(e){
				console.log(e)
			}
		})
		.catch(error =>{
			console.log(error)
		})
	}
}

function getAccess(){
	return axios.post('http://35.154.183.147:5010/api/v1/adminusers/login',{
		"username": "interview",
		"password": "candidate@29072017"
	})
}

function addToken(id){
	return {
		type : "ADD_TOKEN",
		id
	}
}

export function getAccessToken(){
	return function(dispatch){
		return getAccess()
		.then(response =>{
			try{
				console.log(response)
				console.log(response["data"].id)
				
				dispatch(addToken(response["data"].id))
			}
			catch(e){
				console.log(e)
			}
		})
		.catch(error => {
			console.log("SDFSD")
			console.log(error)
		})
	}
}


function chatWithBot(id,token){
	return axios.get('http://35.154.183.147:5010/api/v1/botsessions/'+id+'/botmessage?access_token='+token+'&access_token='+token);
}


function addChat(data){
	return {
		type : "ADD_CHAT",
		data
	}
}

export function getChat(id,token){
	return function(dispatch){
		return chatWithBot(id,token)
		.then(response =>{
			try{
				var data =[];
			console.log(response)
			var userdate,botdate;
			var usertime,bottime;
			for(var i=1;i<response["data"].length;i=i+2){
				userdate = new Date(response["data"][i-1].createdOn);
					userdate = new Date( userdate.getTime() + ( userdate.getTimezoneOffset() * 60000 ) );
					usertime = userdate.toString().split(" ");

					botdate = new Date(response["data"][i].createdOn);
					botdate = new Date( botdate.getTime() + ( botdate.getTimezoneOffset() * 60000 ) );
					bottime = botdate.toString().split(" ");

				data.push({"user" :response["data"][i].userSays,
					"userTime" : userdate.getDate()+'-'+userdate.getMonth()+'-'+userdate.getFullYear()+' '+usertime[4],
					"bot":response["data"][i]["response"]["replies"][0],
					"botTime":botdate.getDate()+'-'+botdate.getMonth()+'-'+botdate.getFullYear()+' '+bottime[4]})
				
			}
			dispatch(addChat(data))
		}
		catch(e){
			console.log(e)
		}
		})
		.catch(error => {
			console.log(error)
		})
	}
}

