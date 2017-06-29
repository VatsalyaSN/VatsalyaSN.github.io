import React from 'react';

const ContainerView = React.createClass({
	renderSessions(){
		console.log("HELP ******************")
		return this.props.agents.map( item =>{
			return <div className="row agentDiv" onClick={()=>this.props.getChat(item.agentId,this.props.access_token)}>
			<p className="col-lg-5 agentRows" >{item.agentId}</p>
			<p className="col-lg-7 time">{item.createdOn}<span className="rightChevron glyphicon glyphicon-chevron-right"></span></p>
			
			</div>
		})
	},

	renderChat(){
		return this.props.chat.map(item => {
			return <div className="chatDiv">
			<div className="userDiv col-lg-10 col-lg-offset-2">
			<p className="user"> {item.user}</p>
			</div>
			<p className="usertime col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8 col-sm-5 col-sm-offset-7 col-xs-6 col-xs-offset-6">{item.userTime}</p>
			<div className="botDiv col-lg-10">
			<p className="bot">{item.bot}</p>
			</div>
			<p className="bottime col-lg-5 col-md-5">{item.botTime}</p>
			</div>
		})
	},

	render(){
		return(
			<div className="row">
				<div className="col-md-2 col-lg-2 col-sm-2 col-xs-2 border">
				<div className="heading1">
				<span className="glyphicon glyphicon-globe"></span><span className="hfont"> Enterprise Bot</span>
				</div>
				<div className="bottomBorder"></div>
				<p className="col-md-12 col-lg-12 col-sm-12 col-xs-12 buttonclass" onClick={()=> this.props.getAgent(this.props.access_token)}>Training</p>
				</div>

				<div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 border">
				<div className="heading2">
				<span className="glyphicon glyphicon-th-list"></span><span className="hfont"> Training</span>
				</div>
				<div className="row agentDivHeading">
				<p className="col-lg-5 col-md-5 col-sm-5 col-xs-5 agentRowshead">Session</p>
				<p className="col-lg-7 col-md-7 col-sm-7 col-xs-7 timehead">Time</p>
				</div>
				<div className="bottomBorder"></div>
				<div className="sessionDiv style-2">
				{this.renderSessions()}
				</div>
				</div>
 
				<div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 border">
				<div className="heading3">
				<span className="glyphicon glyphicon-comment"> <span className="hfont">ChatSession</span></span>
				</div>
				<div className="bottomBorder"></div>
				<div className="chat style-2">
				{this.renderChat()}
				</div>
				</div>
			</div>
			)
	}
})

export default ContainerView;