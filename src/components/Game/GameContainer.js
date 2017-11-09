import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION",
    currentCharCode: 0,
		currentCharIndex: 0,
		lastPressCorrect: true,
		textLength: 1
	}

	handleKeyPress = (event) => {
		this.setState({
			currentCharCode: event.charCode
		})
	}

	handleChange = (event) => {
		let textLength = event.target.value.length
		this.setState({
			currentCharIndex: textLength
		}, this.compareCurrentChar())
	}

	compareCurrentChar = () => {
		let { currentCharCode } = this.state
		let { randSentence } = this.state
		let { currentCharIndex } = this.state
		if(currentCharCode === randSentence.charCodeAt(currentCharIndex)){
			this.setState({
				textLength: this.state.textLength + 1,
				lastPressCorrect: true
			})
		} else {
			this.setState({
				lastPressCorrect: false
			})
		}
	}

	render(){
		return(
			<div className="game-container">
        <RaceTrack />
				<Sentence textOutput={this.state.randSentence}/>
				<TextField handleKeyPress={this.handleKeyPress} handleChange={this.handleChange} maxLen={this.state.textLength}/>
			</div>
		)
	}
}
