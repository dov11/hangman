import { GUESS_LETTER } from '../actions/guess'
import lettersArray from '../fixtures/lettersArray'

export default (state = lettersArray, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    return state.map(letter => {
      if (letter.letter === payload.letter) {
        return { ...letter, clicked: true}
      }
      return letter
    })
    default :
      return state
  }
}
