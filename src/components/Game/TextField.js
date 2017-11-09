import React, {Component} from 'react'

export default class TextField extends Component {
	render(){
		return(
			<div className="text-field">
				<input 
					type="text" 
					className="input" 
					placeholder="SEND ME A MESSAGE" 
					id="type-here" 
					onKeyPress={this.props.handleKeyPress}
					onChange={this.props.handleChange}
					maxLength={this.props.maxLen}
				/>
			</div>
		)
	}
}
