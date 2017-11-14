import React from 'react';

export default class LoginForm extends React.Component{

 	render() {
 		return (
 			<div className="item">
	 	   	<form className="login-block" onSubmit={this.props.handleSubmit}>
		    	<input 
		    		type="text"
		    		name="username"
		    		onChange={this.props.handleChange} 
		    		className="text-field"
		    		placeHolder="Enter Username"
	    		/>
		    	<input type="submit" value="Log In" className="ui button mini primary" />
	    	</form>
    	</div>
  	)
	}
}