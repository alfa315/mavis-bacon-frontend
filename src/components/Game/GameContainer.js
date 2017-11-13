import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'
import FeedbackContainer from './FeedbackContainer.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "",
		currentText: "",
		lastPressCorrect: '',
		currentCharIndex: 0,
		userImgPosition: 0,
		marvisPosition: 0,
		marvisTimer: null
	}

	componentWillMount() {
		this.fetchData()
	}

	fetchData() {
		fetch('https://talaikis.com/api/quotes/random/')
		 .then(response => response.json())
		 .then(quote => this.setState({ randSentence: quote.quote}));
	}

	componentDidMount() {
		let timer = setInterval(this.increaseMarvis, 1000)
		this.setState({
			marvisTimer: timer
		})
	}

	increaseMarvis = () => {
		let difficulty = (781 / this.state.randSentence.length) * 4
		this.setState({
			marvisPosition: this.state.marvisPosition + difficulty
		})
	}


	handleChange = (event) => {
		let changeAmt = (781/this.state.randSentence.length)
		const reg = new RegExp(`^${event.target.value}`) //Add , 'i' for case insensitivity
		if (!!this.state.randSentence.match(reg)){
			this.setState({
				currentCharIndex: this.state.currentCharIndex + 1,
				userImgPosition: this.state.userImgPosition + changeAmt,
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
		console.log(this.state.currentCharIndex)
		return(
			<div className="game-container">
        <RaceTrack imgChangeAmt={this.state.userImgPosition} marvisImgChg={this.state.marvisPosition}/>
				<Sentence textOutput={this.state.randSentence} />
				<TextField handleKeyDown={this.handleKeyDown} textValue={this.state.currentText} handleChange={this.handleChange} />
				<FeedbackContainer rightOrWrong={this.state.lastPressCorrect} />
			</div>
		)
	}
}
