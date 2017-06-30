import React from 'react';

const ContainerView = React.createClass({

	// componentDidMount(){
	// 	window.onload = function () {
	// 				console.log("VATSALYA")
 //    if (!localStorage.justOnce) {
 //        localStorage.setItem("justOnce", "true");
 //        window.location.reload();
 //    		}
	// 	}
	// },

	renderSessions(){
		return this.props.agents.map( item =>{
			return <div className="row agentDiv" onClick={()=>this.props.getChat(item.agentId,this.props.access_token)}>
			<p className="col-md-7 col-lg-7 agentRows" >{item.agentId}</p>
			<p className="col-lg-5 col-md-5 time">{item.createdOn}<span className="rightChevron glyphicon glyphicon-chevron-right"></span></p>
			
			</div>
		})
	},

	renderChat(){
		return this.props.chat.map(item => {
			return <div className="chatDiv">
			<div className="userDiv col-lg-10 col-lg-offset-2">
			<p className="user"> {item.user}</p>
			</div>
			<div className="col-lg-3 col-lg-offset-9 col-md-4 col-md-offset-8">
			<p className="usertime">{item.userTime}</p>
			</div>
			<div className="botDiv col-lg-10">
			<p className="bot">{item.bot}</p>
			</div>
			<p className="bottime col-lg-5 col-md-5">{item.botTime}</p>
			</div>
		})
	},

	render(){
		return(
			<div>
				<div className="col-md-12 col-lg-12 firstRow">
					<span className="glyphicon glyphicon-menu-hamburger ham"></span>
					<img src="http://res.cloudinary.com/dfimz9dwy/image/upload/v1498807936/brand-logo_ttkxeb.svg" className="img-responsive brandLogo" />
				</div>
				<div className="tDiv" id="tDiv">
					<p className="col-md-12 col-lg-12 buttonclass">Categories</p>
					<p className="col-md-12 col-lg-12 buttonclass subcat" onClick={()=> this.props.getAgent(this.props.access_token)}>Chat List <span className="rightChevron glyphicon glyphicon-chevron-right"></span></p>
				</div>
			
				<div className="col-md-5 col-lg-5 training border">
					<div className="heading2">

						<span className="glyphicon glyphicon-th-list"></span><span className="hfont"> Training</span>
					</div>
					<div className="row agentDivHeading">
						<p className="col-lg-7 col-md-7 agentRowshead">Session</p>
						<p className="col-lg-5 col-md-5 timehead">Created time</p>
					</div>
					<div className="sessionDiv style-2">
						{this.renderSessions()}
					</div>
				</div>
 
				<div className="col-md-7 col-lg-7 chatSession border">
					<div className="heading3">
					<span className="glyphicon glyphicon-comment"> <span className="hfont">ChatSession</span></span>
					</div>
					<div className="chat style-2">
					{this.renderChat()}
					</div>
				</div>
			</div>
			)
	}
})

export default ContainerView;