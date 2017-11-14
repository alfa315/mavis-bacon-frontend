import React, {Component} from 'react'
import bacon from '../../assets/blu-car.png'
import marvis from '../../assets/orange-car.png'

export default class RaceTrack extends Component {
	state = {

	}

	render(){
		return(
			<div className="racetrack">
				<div className="lane lane-divider">
					<img className="pig-image" src={bacon} alt="user" style={{left: this.props.imgChangeAmt, top: 73}}/>
				</div>

				<div className="lane">
					<img className="marvis-image" src={marvis} alt="Marvis Bacon" style={{left: this.props.marvisImgChg, top: 183}}/>
				</div>
			</div>
		)
	}
}
