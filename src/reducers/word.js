import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
import newSecretWord from '../fixtures/newSecretWord'

export default (state = {word: secretWord, progress: 2}, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :

    if (payload.letter==='Restart') {
      return {word: newSecretWord, progress: 2}
    }


      const updated = state.word.map(letter => {
        if (letter.letter === payload.letter) {
          return { ...letter, guessed: true}
        }
        return letter
      })

      if (!state.word.map(a=>a.letter).includes(payload.letter)) {
        return {word: updated, progress: state.progress-1}
      }
      else if (!updated.map(a=>a.guessed).includes(false)){
        return {word: updated, progress: 100}
      } else {
        return {word: updated, progress: state.progress}
      }
    default :
      return state
  }
}
