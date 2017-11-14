import React from 'react'
import WavingFlag from '../../assets/waving-checkered-flag.gif'
import LoseSound from '../../assets/lose.wav'
import WinSound from '../../assets/win.wav'

export default class GameOverModal extends React.Component {
  loseSound = () =>{
    let loseSound = new Audio(LoseSound)
    loseSound.play()
  }

  winSound = () =>{
    let winSound = new Audio(WinSound)
    winSound.play()
  }
  render() {
    if (this.props.gameWinner === true) {
      this.props.fetchGames()
      this.winSound()
      return(
        <div className='modal-win' style={{display: this.props.gameOverModal}}>
          <div className='modal-content-win'>
            <div className='modal-header-win'>
              <span className='close-win'> </span>
              <h2> CONGRATULATIONS</h2>
            </div>
            <div className='modal-body-win'>
              <p>YOU WON, YOU BEAT MARVIS! YOUR WORDS PER MINUTE WAS: {this.props.wpm()}</p>
              <p><img src={WavingFlag} alt="waving checkered flag" /><img src={WavingFlag} alt="waving checkered flag" /><img src={WavingFlag} alt="waving checkered flag" /></p>
            </div>
            <div className='modal-footer-win'>
              <button onClick={this.props.handleClick} className='ui black button'>
                Back to Leaderboard
              </button>
            </div>
          </div>
        </div>
      )
    } else if(this.props.gameWinner === false && this.props.gameOverModal === "block") {
        this.props.fetchGames()
        this.loseSound()
        return(
          <div className='modal-lose' style={{display: this.props.gameOverModal}}>
            <div className='modal-content-lose'>
              <div className='modal-header-lose'>
                <span className='close-lose'> </span>
                <h2> BOOOOOOOOOOO </h2>
              </div>
              <div className='modal-body-lose'>
                <p>YOU LOSE, MARVIS IS THE BEST! YOUR WORDS PER MINUTE WAS: {this.props.wpm()}</p>
                <p><img src="https://media.giphy.com/media/EndO2bvE3adMc/giphy.gif" alt="YOU LOSE" /></p>
              </div>
              <div className='modal-footer-lose'>
                <button onClick={this.props.handleClick} className='ui black button'>
                  Back to Leaderboard
                </button>
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
