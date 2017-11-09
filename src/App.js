import React, { Component } from 'react';
import UserContainer from './components/User/UserContainer.js'
import GameContainer from './components/Game/GameContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContainer />
        <GameContainer />
      </div>
    );
  }
}

export default App;
