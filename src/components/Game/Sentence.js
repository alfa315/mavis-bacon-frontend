import React, {Component} from 'react'

export default class Sentence extends Component {


	render(){
		return(
			<div className="sentence">
				<span className="h1-style">{this.props.textOutput}</span>
			</div>
		)
	}
}
