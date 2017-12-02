//src/components/Letter.js
import React, {PureComponent} from 'react'
// import PropTypes from 'prop-types'


class Letter extends PureComponent {
	// static propTypes = {
	// }
	// toggleLetter() {
	// 	this.setState({
	// 		clicked: true
	// 	})
	// }

	render() {
		return (
			<button className={(this.props.clicked) ? "clicked" : "not-clicked"}>
			{this.props.letter}
			</button>
		)
	}
}


export default Letter
