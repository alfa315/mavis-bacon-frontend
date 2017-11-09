import React, { Component } from 'react';
import HeaderContainer from './components/Header/HeaderContainer.js'
import GameContainer from './components/Game/GameContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <GameContainer />
      </div>
    );
  }
}

export default App;
