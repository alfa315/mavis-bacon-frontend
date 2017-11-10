import React, {Component} from 'react'

export default class TextField extends Component {
	render(){
		return(
			<div className="text-field">
				<input
					type="text"
					value={this.props.textValue}
					className="input"
					placeholder="SEND ME A MESSAGE"
					id="type-here"
					// onKeyDown={this.props.handleKeyDown}
					onChange={this.props.handleChange}
					// maxLength={this.props.maxLen}
					autoFocus={true}
				/>
			</div>
		)
	}
}
