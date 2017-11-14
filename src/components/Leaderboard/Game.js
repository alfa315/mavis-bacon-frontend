import React from 'react'

const Game = (props) => {
	return(
		<tr>
			<td>{props.gameId}</td>
			<td>{props.username}</td>
			<td>{props.wpm}</td>
		</tr>
	)
}

export default Game