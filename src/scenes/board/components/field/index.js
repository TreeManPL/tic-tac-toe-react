import React from 'react';
import './index.css';

function Field(props) {
  let win = null;
  if (
    props.winner &&
    Array.isArray(props.winner) &&
    props.winner.indexOf(props.index) >= 0
  ) {
    win = 'win';
  }

  return (
    <div className={win} onClick={props.onClick}>
      {props.value}
    </div>
  );
}

export default Field;
