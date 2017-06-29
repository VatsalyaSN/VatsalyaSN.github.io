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
			return Object.assign({},state,{access_token : action.id});

		case "ADD_SESSION":
			return Object.assign({}, state, {agents : action.arr})

		case "ADD_CHAT":
			return Object.assign({},state,{chat : action.data})

		default : 
			return state;
	}
}

export default reverseReducer;