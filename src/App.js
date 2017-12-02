import React, { Component } from 'react';
import './App.css';
import LettersContainer from './components/LettersContainer'
import letters from './fixtures/lettersArray'
import Word from './components/Word'
import secretWord from './fixtures/secretWord'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Word word={secretWord}/>
        <LettersContainer letters={letters} />
      </div>
    );
  }
}

export default App;
