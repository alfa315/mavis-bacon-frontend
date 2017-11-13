import React from 'react'

export default class GameOverModal extends React.Component {
  render() {
    if (this.props.gameWinner === true) {
      return(
        <div className='modal-win' style={{display: this.props.gameOverModal}}>
        <div className='modal-content-win'>
        <span className='close-win'> </span>
        <p>YOU WON, YOU BEAT MARVIS!</p>
        </div>
        </div>
      )
    } else if(this.props.gameWinner === false && this.props.gameOverModal === "block") {
        return(
          <div className='modal-lose' style={{display: this.props.gameOverModal}}>
            <div className='modal-content-lose'>
              <span className='close-lose'> </span>
              <p>YOU LOSE, MARVIS IS THE BEST!</p>
            </div>
          </div>
        )
      }
      else {
        return null
      }
    }
  }
