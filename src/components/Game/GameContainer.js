import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "I AM IN A GLASS CASE OF EMOTION",
    currentCharCode: 0,
		nextChar: "",
		currentCharIndex: 0
	}

	handleKeyPress = (event) => {
		this.setState({
			currentCharCode: event.charCode,
      currentCharIndex: this.state.currentCharIndex + 1
		})
	}

	render(){
		console.log(this.state)
		return(
			<div className="game-container">
        <RaceTrack />
				<Sentence textOutput={this.state.randSentence}/>
				<TextField handleKeyPress={this.handleKeyPress} />
			</div>
		)
	}
}
