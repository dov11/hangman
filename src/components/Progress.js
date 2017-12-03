//src/components/Progress.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
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
					{
						(this.props.progress < 100) ?
							<div>
								<h2>Lives Left: <span>{this.props.progress}</span></h2>
								<img className="image" src={images[6-this.props.progress]} alt="hangman"/>
							</div>
						:
						<div>
							<h2>Well Done!</h2>
							<img className="image" src={images[7]} alt="hangman"/>
						</div>
					}
					<div>
						{
							(!this.props.progress||this.props.progress===100) ?
								<Letter letter='Restart' clicked={false} />
							:
							  ""
						}
					</div>
				</div>
			}
			</div>
		)
	}
}
// const mapStateToProps = ({ progress }) => ({
//   progress
// })
//
// export default connect(mapStateToProps)(Progress)
export default Progress
