import React, { Component } from 'react';
import LoginHeader 					from './components/Header/LoginHeader.js'
import GameHeader 					from './components/Header/GameHeader.js'
import GameContainer 				from './components/Game/GameContainer.js'
import Home 								from './components/Home.js'
import './App.css';

class App extends Component {

	state = {
		currUserName: '',
		currUserId: null,
		gameData: []
	}

	componentWillMount() {
		this.fetchGames()
	}

	fetchUser = () => {
		fetch('http://127.0.0.1:3000/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({username: `${this.state.currUserName}`}),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({
    	currUserId: data.id
    }))
	}

	fetchGames = () => (
		fetch('http://127.0.0.1:3000/api/v1/games')
			.then(res => res.json())
			.then(data => this.setState({
				gameData: data
			}))
	)

	handleChange = (ev) => {
		this.setState({
			currUserName: ev.target.value
		})
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		this.fetchUser();
	}

  render() {
  	if (this.state.currUserId) {
	    return (
	      <div className="App">
	        <GameHeader />
	        <GameContainer 
	        	currUserName={this.state.currUserName}
	        	currUserId={this.state.currUserId}
        	/>
	      </div>
	    );
  	} else {
  		return (
  			<div className="App">
	        <LoginHeader 
	        	handleSubmit={this.handleSubmit} 
	        	handleChange={this.handleChange} 
        	/>
	        <Home games={this.state.gameData} />
	      </div>
			)
  	}
  }
}

export default App;
