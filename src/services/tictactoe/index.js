// ---- Game logic helper -----

function initState() {
  return {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    winner: null
  };
}

function getWinner(refObj) {
  return refObj.state.winner;
}

function handleRestartClick(refObj) {
  refObj.setState(initState());
  return;
}

function handleFieldClick(i, refObj) {
  const history = refObj.state.history.slice(0, refObj.state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();

  if (refObj.state.winner || squares[i]) {
    return;
  }

  squares[i] = refObj.state.xIsNext ? 'X' : 'O';

  refObj.setState({
    history: history.concat([
      {
        squares: squares
      }
    ]),
    stepNumber: history.length,
    xIsNext: !refObj.state.xIsNext,
    winner: calculateWinner(squares)
  });
}

function getFields(refObj) {
  return refObj.state.history[refObj.state.stepNumber].squares;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }

  if (squares.indexOf(null) === -1) {
    return -1;
  }

  return null;
}

module.exports = {
  initState: initState,
  handleFieldClick: handleFieldClick,
  handleRestartClick: handleRestartClick,
  getFields: getFields,
  getWinner: getWinner
};
