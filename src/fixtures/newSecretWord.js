import {words} from './secretWord'

let newSecretWord = () => { return words[Math.floor(Math.random()*words.length)]
                .split("")
                .map(letter=> ({letter, guessed: false}))}


export default newSecretWord
