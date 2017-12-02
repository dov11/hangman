//src/components/Letter.js
import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Letter extends PureComponent {
	// static propTypes = {
	// }

	render() {
		return (
			<button class={(this.props.clicked) ? "clicked" : "not-clicked"}>
			{this.props.letter}
			</button>
		)
	}
}

export default Letter
