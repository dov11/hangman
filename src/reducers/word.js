import { GUESS_LETTER } from '../actions/guess'
import secretWord from '../fixtures/secretWord'
import newSecretWord from '../fixtures/newSecretWord'
import lettersArray from '../fixtures/lettersArray'
const livesLeftStart = 6

export default (state = {word: secretWord, progress: livesLeftStart, letters: lettersArray}, { type, payload } = {}) => {
  switch(type) {
    case GUESS_LETTER :

      if (payload.letter==='Restart') {
        return {word: newSecretWord(), progress: livesLeftStart, letters: lettersArray}
      }

      const updated = state.word.map(letter => {
        if (letter.letter === payload.letter) {
          return { ...letter, guessed: true}
        }
        return letter
      })

      const guessed = state.word.map(a=>a.letter).includes(payload.letter)
      const correctClassName = guessed ? "correct" : "incorrect"
      const won = !updated.map(a=>a.guessed).includes(false)
      const lost = (!guessed && state.progress===1)

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

      const disabledLetters = updatedLetters.map(letter=>{
        return {
          ...letter,
          clicked: true,
        }
      })

      if (lost) {
        return {word: updated, progress: state.progress-1, letters: disabledLetters}
      }
      else if (!guessed) {
        return {word: updated, progress: state.progress-1, letters: updatedLetters}
      }
      else if (won){
        return {word: updated, progress: 100, letters: disabledLetters}
      }
      else {
        return {word: updated, progress: state.progress, letters: updatedLetters}
      }

    default :
      return state
  }
}
