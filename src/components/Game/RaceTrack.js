import React, {Component} from 'react'
import bacon from '../../assets/marvis.jpg'
import marvis from '../../assets/mavis-beacon.jpg'

export default class RaceTrack extends Component {
	state = {

	}

	render(){
		return(
			<div className="racetrack">
				<div className="lane lane-divider">
					<img className="pig-image" src={bacon} alt="user" style={{left: this.props.imgChangeAmt, top: 115}}/>
				</div>

				<div className="lane">
					<img className="marvis-image" src={marvis} alt="Marvis Bacon" style={{left: this.props.marvisImgChg, top: 225}}/>
				</div>
			</div>
		)
	}
}
