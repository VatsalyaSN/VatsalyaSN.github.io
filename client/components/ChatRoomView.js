import React from 'react';
import ContainerView from './ContainerView';


const ChatRoomView = React.createClass({
	componentDidMount(){
		this.props.getAccessToken();
	},

	render(){
		const {textToReverse, getAgent, access_token, agents, getChat,chat} = this.props;
		return(
			<div className="container-fluid">
			<ContainerView getAgent={getAgent} access_token={access_token} agents={agents} 
			getChat={getChat} chat={chat}/>
			</div>
			)
	}
})

export default ChatRoomView;

