import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION",
		currentText: "",
    currentCharCode: 0,
		currentCharIndex: 0,
		lastPressCorrect: true,
		textLength: 1
	}

	handleKeyDown = (event) => {
		console.log(event.keyCode);
		if((event.keyCode === 8 || event.keyCode === 46) && this.state.textLength === 1 && this.state.currentCharIndex === 0){
			return null
		}else if(event.keyCode === 8 || event.keyCode === 46) {
			this.setState({
				currentCharCode: 0,
				textLength: this.state.textLength - 1,
				currentCharIndex: this.state.currentCharIndex - 1
			})
		} else if(event.keyCode !== this.state.randSentence.charCodeAt(this.state.currentCharIndex)) {
			event.preventDefault()
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
				lastPressCorrect: true
			})
		} else {
			this.setState({
				lastPressCorrect: false,
			})
		}
	}

	render(){
		console.log("Text:", this.state.currentText)
		console.log("Text Length:", this.state.textLength)
		console.log("Index:", this.state.currentCharIndex)
		console.log("Char Code:", this.state.currentCharCode)
		return(
			<div className="game-container">
        <RaceTrack />
				<Sentence textOutput={this.state.randSentence} />
				<TextField handleKeyDown={this.handleKeyDown} handleChange={this.handleChange} maxLen={this.state.textLength}/>
			</div>
		)
	}
}
