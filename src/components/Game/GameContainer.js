import React, {Component} from 'react'
import TextField from './TextField.js'
import Sentence from './Sentence.js'
import RaceTrack from './RaceTrack.js'
import FeedbackContainer from './FeedbackContainer.js'
import GameOverModal from './GameOverModal.js'

export default class GameContainer extends Component {
	state = {
		randSentence: "",
		currentText: "",
		lastPressCorrect: '',
		userImgPosition: 0,
		marvisPosition: 0,
		marvisTimer: null,
		gameOverModal: "none",
		gameWinner: false
	}

	componentWillMount() {
		this.fetchData()
	}

	fetchData() {
		fetch('https://talaikis.com/api/quotes/random/')
		 .then(response => response.json())
		 .then(quote => this.setState({ randSentence: quote.quote.trim()}));
	}

	componentDidMount() {
		let timer = setInterval(this.increaseMarvis, 1000)
		this.setState({
			marvisTimer: timer
		})
		setTimeout(function( ) { clearInterval( timer ); }, 60000);
	}

	increaseMarvis = () => {
		let difficulty = (window.innerWidth / this.state.randSentence.length) * 4
		this.setState({
			marvisPosition: this.state.marvisPosition + difficulty
		})
	}

	handleChange = (event) => {
		let ev = event
		const reg = new RegExp(`^${event.target.value}`) //Add , 'i' for case insensitivity
		if (!!this.state.randSentence.match(reg)){
			console.log(event.target.value);
			this.setState({
				userImgPosition: (window.innerWidth * (event.target.value.length/this.state.randSentence.length)),
				currentText: event.target.value,
				lastPressCorrect: 'true'
			})
			if (event.target.value === this.state.randSentence)
				this.handleModal(ev)
		} else {
			this.setState({
				lastPressCorrect: 'false'
			})
		}
	}

	handleModal = (event) => {
		console.log(this.state.marvisPosition)
		console.log(window.innerWidth)
		if(event.target.value.length === this.state.randSentence.length) {
			this.setState({
				gameOverModal: "block",
				gameWinner: true
			})
		} else if(this.state.marvisPosition > window.innerWidth) {
			this.setState({
				gameOverModal: "block"
			})
		}
	}

	render(){
		console.log(this.state.marvisPosition)
		console.log(window.innerWidth)
		return(
			<div className="game-container">
        <RaceTrack imgChangeAmt={this.state.userImgPosition}
					marvisImgChg={this.state.marvisPosition}
				/>
				<Sentence
					textOutput={this.state.randSentence}
				/>
				<TextField
					textValue={this.state.currentText}
					handleChange={this.handleChange}
				/>
				<FeedbackContainer
					rightOrWrong={this.state.lastPressCorrect}
				/>
				<GameOverModal
					gameOverModal={this.state.gameOverModal}
					gameWinner={this.state.gameWinner}
				/>
			</div>
		)
	}
}
