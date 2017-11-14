import React from 'react';
import { Route, Link } from 'react-router-dom'

const LoginHeader = (props) => {
  return (
    <div className="ui menu">
    	<h1>{props.username.toUpperCase()}</h1>
    </div>
  )
}

export default LoginHeader
