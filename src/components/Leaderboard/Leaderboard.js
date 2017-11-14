import React from 'react'
import Game from './Game.js'


export default class Leaderboard extends React.Component {


	sortGames = () => {
		return this.props.games.sort((g1, g2) => {
			if (+g2.wpm > +g1.wpm) {
				return 1
			}
			if (+g2.wpm < +g1.wpm)	{
				return -1
			}
			return 0
		})
	}

	render() {
		let gameCells = this.sortGames().map((game, idx) => <Game username={game.user.username} wpm={game.wpm} gameId={game.id} key={idx} />)

    return(
      <div className="ui container">
        <h1>Type Kings Leaderboard</h1>
    		<table className="ui celled striped padded table">
          <thead>
            <tr>
              <th>
                <h3 className="ui center aligned header">Game ID</h3>
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
            {gameCells.sort((g1, g2) => {g2.props.wpm > g1.props.wpm})}
          </tbody>
        </table>
      </div>
    )
	}

}
