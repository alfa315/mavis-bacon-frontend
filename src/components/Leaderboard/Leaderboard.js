import React from 'react'
import Game from './Game.js'


export default class Leaderboard extends React.Component {

	render() {
    
    let gameCells = this.props.games.map((game, idx) => <Game username={game.user.username} wpm={game.wpm} gameId={game.id} key={idx} />)
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
            {gameCells}
          </tbody>
        </table>
      </div>
    )
	}

}