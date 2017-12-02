import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
const livesLeftStart = 6

export default (state = livesLeftStart, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    if (!secretWord.map(a=>a.letter).includes(payload.letter)){
      return state -1
    } else {
    return state
  }
    default :
      return state
  }
}
