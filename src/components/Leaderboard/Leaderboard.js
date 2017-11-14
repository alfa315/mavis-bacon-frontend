import React from 'react'
import Game from './Game.js'


export default class Leaderboard extends React.Component {


	sortGames = () => {
		return this.props.games.sort(function(a, b) {
			return b.wpm > a.wpm ? 1 : -1
		});
	}

	render() {
		let gameCells = this.sortGames().map((game, idx) => <Game username={game.user.username} wpm={game.wpm} rank={idx} key={idx} />)
    return(
      <div className="ui container">
        <h1>Type Kings Top 10</h1>
    		<table className="ui celled striped padded table">
          <thead>
            <tr>
              <th>
                <h3 className="ui center aligned header">Rank</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Username</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Words Per Minute</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {gameCells.slice(0,10)}
          </tbody>
        </table>
      </div>
    )
	}

}
