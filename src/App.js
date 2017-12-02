import React, { Component } from 'react';
import './App.css';
import LettersContainer from './components/LettersContainer'
import letters from './fixtures/lettersArray'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LettersContainer letters={letters} />
      </div>
    );
  }
}

export default App;
