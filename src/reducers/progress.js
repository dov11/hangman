import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
const livesLeftStart = 2

export default (state = livesLeftStart, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :

    if (payload.letter==='Restart') {
      return livesLeftStart
    }


    if (!secretWord.map(a=>a.letter).includes(payload.letter)){
      return state -1
    } else {
    return state
  }
    default :
      return state
  }
}
