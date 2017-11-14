import React from 'react';

const LoginHeader = (props) => {
  return (
    <div className="menu ui large">
    	<div className='item'>{props.username.toUpperCase()}</div>
    </div>
  )
}

export default LoginHeader
