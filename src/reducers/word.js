import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'

export default (state = secretWord, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    console.log('guess')
      return state

    default :
      return state
  }
}
