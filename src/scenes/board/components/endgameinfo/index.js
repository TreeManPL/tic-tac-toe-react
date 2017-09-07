import React from 'react';
import './index.css';

function endGameInfo(props) {
  let text = 'There is a draw';

  if (props.value) {
    text = 'And the winner is "' + props.value + '"';
  }

  return (
    <div>
      <p className="endGameInfo">{text}</p>
      <a className="btn" onClick={props.onClick}>
        Restart
      </a>
    </div>
  );
}

export default endGameInfo;
