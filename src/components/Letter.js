//src/components/Letter.js
import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import guess from '../actions/guess'
import './Letter.css'


class Letter extends PureComponent {
	sendGuess() {
		const letter = {
			letter: this.props.letter,
			clicked: true
		}
		this.props.guess(letter)
	}

	render() {
		return (
			<button
				onClick={this.sendGuess.bind(this)}
				className={((this.props.clicked) ? this.props.correct : "not-clicked")+((this.props.letter==='Restart')?" restart":"")}
				disabled={this.props.clicked}
				>
			{this.props.letter}
			</button>
		)
	}
}
const mapDispatchtoProps = {guess: guess}
export default connect(null, mapDispatchtoProps)(Letter)
// export default Letter
