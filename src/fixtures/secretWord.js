const secretWord = "hello"
                .split("")
                .map(letter=> ({letter, guessed: false}))

export default secretWord
