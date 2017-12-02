//src/components/word.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Word extends PureComponent {
	static propTypes = {
		word: PropTypes.arrayOf(PropTypes.shape({
			letter: PropTypes.string,
			guessed: PropTypes.bool
		}))
	}

	renderWord(letter, index) {
		return (
      <span key={index}> {letter.guessed ? letter.letter : "_"} </span>
    )
	}

	render() {
		return (
			<div>
				<h2>
					{this.props.word.map(this.renderWord)}
				</h2>
			</div>
		)
	}
}

export default Word
