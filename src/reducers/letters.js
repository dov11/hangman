import { GUESS_LETTER } from '../actions/guess'
import lettersArray from '../fixtures/lettersArray'

export default (state = lettersArray, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    console.log('guess')
      return state

    default :
      return state
  }
}
