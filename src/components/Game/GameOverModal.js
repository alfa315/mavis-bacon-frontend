import React from 'react'

export default class GameOverModal extends React.Component {
  render() {
    if (this.props.gameWinner === true) {
      this.props.fetchGames()
      return(
        <div className='modal-win' style={{display: this.props.gameOverModal}}>
          <div className='modal-content-win'>
            <div className='modal-header-win'>
              <span className='close-win'> </span>
              <h2> CONGRATULATIONS</h2>
            </div>
            <div className='modal-body-win'>
              <p>YOU WON, YOU BEAT MARVIS! YOUR WORDS PER MINUTE WAS: {this.props.wpm()}</p>
            </div>
            <div className='modal-footer-win'>
            </div>
          </div>
        </div>
      )
    } else if(this.props.gameWinner === false && this.props.gameOverModal === "block") {
        this.props.fetchGames()
        return(
          <div className='modal-lose' style={{display: this.props.gameOverModal}}>
            <div className='modal-content-lose'>
              <div className='modal-header-lose'>
                <span className='close-lose'> </span>
                <h2> BOOOOOOOOOOO </h2>
              </div>
              <div className='modal-body-lose'>
                <p>YOU LOSE, MARVIS IS THE BEST! YOUR WORDS PER MINUTE WAS: {this.props.wpm()}</p>
              </div>
              <div className='modal-footer-lose'>
              </div>
            </div>
          </div>
        )
      }
      else {
        return null
      }
    }
  }
