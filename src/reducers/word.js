import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'

export default (state = secretWord, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    
      const updated = state.map(letter => {
        if (letter.letter === payload.letter) {
          return { ...letter, guessed: true}
        }
        return letter
      })
      return updated
    default :
      return state
  }
}
