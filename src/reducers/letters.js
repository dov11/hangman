import { GUESS_LETTER } from '../actions/guess'
import lettersArray from '../fixtures/lettersArray'
import secretWord from '../fixtures/secretWord'


export default (state = lettersArray, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :
    const correctClassName = secretWord.map(a=>a.letter).includes(payload.letter) ? "correct" : "incorrect"
    return state.map(letter => {
      if (letter.letter === payload.letter) {
        return {
            ...letter,
            clicked: true,
            correct: correctClassName
          }
      }
      return letter
    })
    default :
      return state
  }
}
