import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'

export default class TypingContainer extends Component {
	state = {

	}

	render(){
		return(
			<div className="typing-container">
				<h2>TypingContainer</h2>
				<Sentence />
				<TextField />
			</div>
		)
	}
}