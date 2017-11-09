import React, {Component} from 'react'

export default class TextField extends Component {
	state = {

	}

	render(){
		return(
			<div className="text-field">
				<input type="text" className="input" placeholder="SEND ME A MESSAGE" id="type-here"/>
			</div>
		)
	}
}