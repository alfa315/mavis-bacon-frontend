import React from 'react';
import RaceTrack from './RaceTrack.js'
import TypingContainer from './TypingContainer.js'

export default class GameContainer extends React.Component {
  state = {

  }


  render() {
    return (
      <div className="game-container">
      	<RaceTrack />
      	<TypingContainer />
      </div>
    )
  }
}
