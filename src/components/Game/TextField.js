import React, {Component} from 'react'

export default class TextField extends Component {
	render(){
		if (this.props.acceptsInput) {
			return(
			<div className="text-field">
				<input
					type="text"
					value={this.props.textValue}
					className="input"
					placeholder="SEND ME A MESSAGE"
					id="type-here"
					onChange={this.props.handleChange}
					autoFocus={true}
				/>
			</div>
		)
	} else {
		return(
			<div className="text-field">
				<input
					type="text"
					value={this.props.textValue}
					className="input"
					placeholder="SEND ME A MESSAGE"
					id="type-here"
					onChange={this.props.handleChange}
					autoFocus={true}
					disabled="disabled"
				/>
			</div>
		)}
	}
}
