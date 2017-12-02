//src/components/LettersContainer.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Letter from './Letter'
import { connect } from 'react-redux'


class LettersContainer extends PureComponent {
	static propTypes = {
		letters: PropTypes.arrayOf(PropTypes.shape({
			letter: PropTypes.string,
			clicked: PropTypes.bool
		}))
	}

	renderLetter(letter) {
		return <Letter key={letter.letter} {...letter} />
	}

	render() {
		return (
			<div>
				{this.props.letters.map(this.renderLetter)}
			</div>
		)
	}
}

const mapStateToProps = ({ letters }) => ({
  letters
})

export default connect(mapStateToProps)(LettersContainer)
// export default LettersContainer
