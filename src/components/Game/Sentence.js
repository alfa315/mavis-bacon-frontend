import React, {Component} from 'react'

export default class Sentence extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION"
	}



	render(){
		return(
			<div className="sentence">
				<span className="h1-style">{this.state.randSentence}</span>
			</div>
		)
	}
}
