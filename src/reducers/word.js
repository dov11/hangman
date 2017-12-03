import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
import newSecretWord from '../fixtures/newSecretWord'
import lettersArray from '../fixtures/lettersArray'


export default (state = {word: secretWord, progress: 2, letters: lettersArray}, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :

      if (payload.letter==='Restart') {
        return {word: newSecretWord(), progress: 2, letters: lettersArray}
      }

      const updated = state.word.map(letter => {
        if (letter.letter === payload.letter) {
          return { ...letter, guessed: true}
        }
        return letter
      })

      const correctClassName = state.word.map(a=>a.letter).includes(payload.letter) ? "correct" : "incorrect"
      const updatedLetters = state.letters.map(letter => {
        if (letter.letter === payload.letter) {
          return {
              ...letter,
              clicked: true,
              correct: correctClassName
            }
        }
        return letter
      })

      if (!state.word.map(a=>a.letter).includes(payload.letter)) {
        return {word: updated, progress: state.progress-1, letters: updatedLetters}
      }
      else if (!updated.map(a=>a.guessed).includes(false)){
        return {word: updated, progress: 100, letters: updatedLetters}
      } else {
        return {word: updated, progress: state.progress, letters: updatedLetters}
      }
    default :
      return state
  }
}
