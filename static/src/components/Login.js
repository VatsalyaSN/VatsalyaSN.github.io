import React from 'react';
import {browserHistory} from 'react-router';

const Login = React.createClass({
	render(){
		return(
			<div className="container-fluid loginContainer">
			<div className="row">
			
			<div className="col-lg-7 col-md-7">
			<div className="animated bounceInLeft"></div>
			</div>
			
			<div className="col-md-5 col-lg-5 jumbotron">
			<h3 className="loginh">Login</h3>
			<div className="form-group">
 			<label htmlFor="usr">Name:</label>
			<input type="text" className="form-control" id="usr" ref="username"/>
			</div>
			<div className="form-group">
  	  		<label htmlFor="pwd">Password:</label>
    		<input type="password" className="form-control" id="pwd" ref="password"/>
			</div>
			<button type="submit" className="btn btn-primary btn-lg" 
			onClick={()=>this.props.getAccessToken(this.refs.username.value, this.refs.password.value)}>Submit</button>
			</div>
			{
			this.props.authError === "yes" ? browserHistory.push("/main") : ""
			}
			</div>
			</div>
			)
	}
})

export default Login;