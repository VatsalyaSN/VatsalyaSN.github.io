function handleReverse(state,item){
	console.log(item)
	var revText = item.split('').reverse().join('')
	console.log("REVERSED ",revText);
	var newArr = {
		data : item,
		reverse : revText
	}
	return [...state,newArr]
}



function reverseReducer(state={},action){
	switch(action.type){
		case "ADD_TOKEN":
			return Object.assign({},state,{access_token : action.id, authError:"yes"});

		case "ADD_SESSION":
			return Object.assign({}, state, {agents : action.arr, access_token:action.token})

		case "ADD_CHAT":
			return Object.assign({},state,{chat : action.data})

		case "ERROR_HANDLE":
			return Object.assign({},state,{authError: "no"})

		default : 
			return state;
	}
}

export default reverseReducer;