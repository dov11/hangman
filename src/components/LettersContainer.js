//src/components/LettersContainer.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Letter from './Letter'
import './LettersContainer.css'

class LettersContainer extends PureComponent {
	static propTypes = {
		letters: PropTypes.arrayOf(PropTypes.shape({
			letter: PropTypes.string,
			clicked: PropTypes.bool,
			correct: PropTypes.string
		}))
	}

	renderLetter(letter) {
		return <Letter key={letter.letter} {...letter} />
	}

	render() {
		return (
			<div className="letters-container">
				{this.props.letters.map(this.renderLetter)}
			</div>
		)
	}
}

export default LettersContainer
