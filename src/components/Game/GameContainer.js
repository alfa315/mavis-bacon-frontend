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
		raceTimer: 0,
		gameOverModal: "none",
		gameWinner: false,
		correctCharPerMin: 0,
		interval: null,
		acceptsInput: true
	}

	componentWillMount() {
		this.fetchData()
	}

	componentDidMount() {
		let timer = setInterval(this.increaseMarvis, 1000)
		this.setState({
			interval: timer
		})
		setTimeout(function( ) { clearInterval( timer ); }, 60000);
	}

	fetchData() {
		fetch('https://talaikis.com/api/quotes/random/')
		 .then(response => response.json())
		 .then(quote => this.setState({ randSentence: quote.quote.trim()}));
	}

	increaseMarvis = () => {
		if(this.state.randSentence.length > 0) {
			let difficulty = (window.innerWidth / this.state.randSentence.length) * 4
			this.setState({
				marvisPosition: this.state.marvisPosition + difficulty,
				raceTimer: this.state.raceTimer + 1
			})
			if(this.state.marvisPosition > window.innerWidth) {
				this.setState({
					gameOverModal: "block",
					acceptsInput: false
				})
				clearInterval(this.state.interval)
			}
		}
	}

	calculateCharPerMin = () => {
		let val = Math.round(this.state.currentText.length / this.state.raceTimer * 60)
		return val
	}

	calculateWordsPerMin = () => {
		let wordsCount = this.state.currentText !== "" ? this.state.currentText.split(" ").length : 0
		return Math.round(wordsCount / this.state.raceTimer * 60)
	}

	cleanInputForRegex = (text) => {
		return text.replace(/\?/g, '\\?').replace(/\./g, '\\.')
	}

	handleChange = (event) => {
		const newEv = this.cleanInputForRegex(event.target.value)
		const reg = new RegExp(`^${newEv}`) //Add , 'i' for case insensitivity
		if (!!this.state.randSentence.match(reg)){
			this.setState({
				userImgPosition: (window.innerWidth * (event.target.value.length/this.state.randSentence.length)),
				currentText: event.target.value,
				lastPressCorrect: 'true',
				correctCharPerMin: this.calculateCharPerMin()
			})
			if(event.target.value.length === this.state.randSentence.length) {
				event.preventDefault()
				this.setState({
					gameOverModal: "block",
					gameWinner: true,
					lastPressCorrect: 'true',
					acceptsInput: false
				})
				clearInterval(this.state.interval)
			}
		} else {
			this.setState({
				lastPressCorrect: 'false'
			})
		}
	}

	fetchGames = () => {
		fetch('http://127.0.0.1:3000/api/v1/games', {
			method: 'POST',
			body: JSON.stringify({
				wpm: `${this.calculateWordsPerMin()}`,
				user_id: `${this.props.currUserId}`,
				game_won: `${this.state.gameWinner}`
			}),
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
	}

	render(){
		console.log(this.state.gameWinner)
		return(
			<div className="game-container">
        <RaceTrack
        	imgChangeAmt={this.state.userImgPosition}
					marvisImgChg={this.state.marvisPosition}
				/>
				<Sentence
					textOutput={this.state.randSentence}
				/>
				<TextField
					textValue={this.state.currentText}
					handleChange={this.handleChange}
					acceptsInput={this.state.acceptsInput}
				/>
				<FeedbackContainer
					rightOrWrong={this.state.lastPressCorrect}
				/>
				<GameOverModal
					gameOverModal={this.state.gameOverModal}
					gameWinner={this.state.gameWinner}
					wpm={this.calculateWordsPerMin}
					fetchGames={this.fetchGames}
				/>
				<h3 className='CPM'>{!!this.calculateCharPerMin() ? this.calculateCharPerMin() : 0} Characters Per Minute</h3>
			</div>
		)
	}
}
