import React from 'react';

export default class LoginForm extends React.Component{

 	render() {
 		return (
 	   	<form className="login-block" onSubmit={this.props.handleSubmit}>
	    	<input 
	    		type="text"
	    		name="username"
	    		onChange={this.props.handleChange} 
	    		className="text-field"
    		/>
	    	<input type="submit" value="Log In" />
    	</form>
  	)
	}
}