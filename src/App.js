import React, { Component } from 'react';
import './App.css';
import Board from './scenes/board/index';
import {
  initState,
  handleFieldClick,
  handleRestartClick,
  getFields,
  getWinner
} from './services/tictactoe/index';

class App extends Component {
  constructor() {
    super();
    this.state = initState();
  }

  render() {
    const winner = getWinner(this);
    return (
      <div>
        <p>Tic Tac Toe - GAME</p>
        <Board
          winner={winner}
          fields={getFields(this)}
          onRestartClick={() => handleRestartClick(this)}
          onFieldClick={i => handleFieldClick(i, this)}
        />
      </div>
    );
  }
}

export default App;
