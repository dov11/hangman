//src/components/word.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Progress from './Progress'
import LettersContainer from './LettersContainer'


class Word extends PureComponent {
	// static propTypes = {
	// 	word: PropTypes.arrayOf(PropTypes.shape({
	// 		letter: PropTypes.string,
	// 		guessed: PropTypes.bool
	// 	}))
	// }

	renderWord(letter, index) {
		return (
      <span key={index}> {letter.guessed ? letter.letter : "_"} </span>
    )
	}

	render() {
		return (
			<div>
				<h2>
					{this.props.word.word.map(this.renderWord)}
				</h2>
				<Progress progress={this.props.word.progress}/>
				<LettersContainer letters={this.props.word.letters} />

			</div>
		)
	}
}
const mapStateToProps = ({ word }) => ({
  word
})

export default connect(mapStateToProps)(Word)
// export default Word
