import React, { Component } from 'react';
import Field from './components/field/index';
import EndGameInfo from './components/endgameinfo/index';
import './index.css';

class Board extends Component {
  render() {
    let endGameInfo = null;
    if (this.props.winner) {
      if (this.props.winner === -1) {
        endGameInfo = (
          <EndGameInfo
            onClick={() => this.props.onRestartClick()}
            value={null}
          />
        );
      } else {
        endGameInfo = (
          <EndGameInfo
            onClick={() => this.props.onRestartClick()}
            value={this.props.fields[this.props.winner[0]]}
          />
        );
      }
    }

    return (
      <div>
        {endGameInfo}
        <div className="game">
          {this.props.fields.map((o, i) => (
            <Field
              winner={this.props.winner}
              key={i}
              index={i}
              value={this.props.fields[i]}
              onClick={() => this.props.onFieldClick(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
