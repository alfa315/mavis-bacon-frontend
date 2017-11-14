import React from 'react'
import Leaderboard from './Leaderboard/Leaderboard.js'

const Home = (props) => {
	return (
		<div>
			<h1>Welcome to Marvis Bacon, the Typing Race Game</h1>
			<div className="ui segment">
				<p className="larger-text">Be ready to type as soon as the next screen loads!</p>
				<p className="larger-text">You're racing Marvis Bacon (and all the other players of all time) for a coveted seat on the <strong>Top 10</strong></p>
			</div>
			<Leaderboard games={props.games} />
		</div>
	)
}

export default Home;