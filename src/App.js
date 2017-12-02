import React, { Component } from 'react';
import './App.css';
import LettersContainer from './components/LettersContainer'
import letters from './fixtures/lettersArray'
import Word from './components/Word'
import secretWord from './fixtures/secretWord'
import Progress from './components/Progress'
const livesLeftStart = 6
class App extends Component {
  render() {
    return (
      <div className="App">
        <Word word={secretWord}/>
        <Progress progress={livesLeftStart}/>
        <LettersContainer letters={letters} />
      </div>
    );
  }
}

export default App;
