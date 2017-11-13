import React, {Component} from 'react'
import bacon from './marvis.jpg'
import marvis from './mavis-beacon.jpg'

export default class RaceTrack extends Component {
	state = {

	}

	render(){
		return(
			<div className="racetrack">
				<div className="lane lane-divider">
					<img className="pig-image" src={bacon} style={{left: this.props.imgChangeAmt, top: 115}}/>
				</div>

				<div className="lane">
					<img className="marvis-image" src={marvis} style={{left: this.props.marvisImgChg, top: 225}}/>
				</div>
			</div>
		)
	}
}
