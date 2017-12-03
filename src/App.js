import React, { Component } from 'react';
import './App.css';
import letters from './fixtures/lettersArray'
import Word from './components/Word'
import secretWord from './fixtures/secretWord'
const livesLeftStart = 6
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Hangman Game</h1>
        </header>
        <Word word={{word: secretWord, progress: livesLeftStart, letters: letters}}/>
      </div>
    );
  }
}

export default App;
