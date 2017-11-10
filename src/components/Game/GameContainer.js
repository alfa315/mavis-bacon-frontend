import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'
import FeedbackContainer from './FeedbackContainer.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION",
		currentText: "",
    currentCharCode: 0,
		currentCharIndex: 0,
		lastPressCorrect: '',
		textLength: 1
	}

	handleKeyDown = (event) => {
		if ((event.keyCode === 8 || event.keyCode === 46) && this.state.textLength === 1 && this.state.currentCharIndex === 0){
			return null
		} else if (event.keyCode === 8 || event.keyCode === 46) {
			this.setState({
				currentCharCode: 0,
				textLength: this.state.textLength - 1,
				currentCharIndex: this.state.currentCharIndex - 1
			})
		} else if (event.keyCode !== this.state.randSentence.charCodeAt(this.state.currentCharIndex)) {
			event.preventDefault()
			this.setState({
				lastPressCorrect: 'false'
			})
		} else {
			this.setState({
				currentCharCode: event.keyCode
			})
		}
	}

	handleChange = (event) => {
		if(this.state.currentCharCode === this.state.randSentence.charCodeAt(this.state.currentCharIndex)){
			this.setState({
				currentCharIndex: event.target.value.length,
				currentText: event.target.value,
				textLength: event.target.value.length + 1,
				lastPressCorrect: 'true'
			})
		} else {
			this.setState({
				lastPressCorrect: 'false',
			})
		}
	}

	render(){
		console.log(this.state)
		return(
			<div className="game-container">
        <RaceTrack />
				<Sentence textOutput={this.state.randSentence} />
				<TextField handleKeyDown={this.handleKeyDown} handleChange={this.handleChange} maxLen={this.state.textLength}/>
				<FeedbackContainer rightOrWrong={this.state.lastPressCorrect} />
			</div>
		)
	}
}
