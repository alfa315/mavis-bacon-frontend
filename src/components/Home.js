import React from 'react'
import Leaderboard from './Leaderboard/Leaderboard.js'

const Home = (props) => {
	return (
		<div>
			<h1>Welcome to Marvis Bacon, the Typing Race Game</h1>
			<p>I'm using this to create some space.</p>
			<Leaderboard games={props.games} />
		</div>
	)
}

export default Home;