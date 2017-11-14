import React from 'react';
import LoginForm from './LoginForm.js'

const LoginHeader = (props) => {
  return (
    <div className="menu ui large">
    	<LoginForm handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
    </div>
  )
}

export default LoginHeader