import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'
import FeedbackContainer from './FeedbackContainer.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION",
		currentText: "",
		lastPressCorrect: ''
	}

	handleChange = (event) => {

		const reg = new RegExp(`^${event.target.value}`) //Add , 'i' for case insensitivity
		if (!!this.state.randSentence.match(reg)){
			this.setState({
				currentText: event.target.value, 
				lastPressCorrect: 'true'
			})
		} else {
			this.setState({
				lastPressCorrect: 'false'
			})
		}
	}

	render(){
		console.log(this.state)
		return(
			<div className="game-container">
        <RaceTrack />
				<Sentence textOutput={this.state.randSentence} />
				<TextField handleKeyDown={this.handleKeyDown} textValue={this.state.currentText} handleChange={this.handleChange} maxLen={this.state.textLength}/>
				<FeedbackContainer rightOrWrong={this.state.lastPressCorrect} />
			</div>
		)
	}
}
