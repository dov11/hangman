//src/components/word.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import images from '../images/images'
import './Progress.css'
import Letter from './Letter'

class Progress extends PureComponent {
	static propTypes = {
		progress: PropTypes.number
	}


	render() {
		return (
			<div>
			{
				<div>
					<h2>Lives Left: <span>{this.props.progress}</span></h2>
					<img className="image" src={images[6-this.props.progress]} alt="hangman"/>
					<div>
						{(!this.props.progress) ? <Letter letter='Restart' clicked={false} />: ""}
					</div>
				</div>
			}
			</div>
		)
	}
}
const mapStateToProps = ({ progress }) => ({
  progress
})

export default connect(mapStateToProps)(Progress)
