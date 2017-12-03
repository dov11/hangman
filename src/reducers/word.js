import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
import newSecretWord from '../fixtures/newSecretWord'

export default (state = secretWord, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :

    if (payload.letter==='Restart') {
      return newSecretWord
    }


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
