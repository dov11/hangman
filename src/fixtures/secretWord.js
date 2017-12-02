const words = [
              'hello',
              'world',
              'word',
              'rails',
              'jazz',
              'late',
              'night',
              'days',
              'javascript',
              'random',
              'maiden',
              'someone',
              'music'
            ]

const secretWord = words[Math.floor(Math.random()*words.length)]
                .split("")
                .map(letter=> ({letter, guessed: false}))

export default secretWord
