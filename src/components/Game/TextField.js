import React, {Component} from 'react'

export default class TextField extends Component {
	state = {
		typedText: ""
	}

	handleChange = (event) => {
		this.setState({
			typedText: event.target.value
		})
	}

	render(){
		return(
			<div className="text-field">
				<input type="text" className="input" placeholder="SEND ME A MESSAGE" id="type-here" onChange={this.handleChange}/>
			</div>
		)
	}
}
