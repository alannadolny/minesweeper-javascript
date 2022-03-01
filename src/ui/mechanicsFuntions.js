export const randomizeBombs = (fieldsNumber, bombPercentage) => {
  let bombs = [];
  while (fieldsNumber * fieldsNumber * bombPercentage > bombs.length) {
    const randomField = [
      Math.round(Math.random() * fieldsNumber),
      Math.round(Math.random() * fieldsNumber),
    ];
    if (randomField[0] >= fieldsNumber || randomField[1] >= fieldsNumber)
      continue;
    if (!bombs.includes(randomField)) bombs.push(randomField);
  }
  return bombs;
};

export const getUncoveredBoard = (bombs, fieldsNumber) => {
  let board = Array.from(Array(fieldsNumber), (_) => []).map((_) =>
    Array.from(Array(fieldsNumber), (_) => 1)
  );
  for (const bomb of bombs) {
    board[bomb[0]][bomb[1]] = 'x';
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'x') {
        if (j + 1 < board.length && board[i][j + 1] && board[i][j + 1] !== 'x')
          board[i][j + 1]++;
        if (
          i + 1 < board.length &&
          j + 1 < board.length &&
          board[i + 1][j + 1] &&
          board[i + 1][j + 1] !== 'x'
        )
          board[i + 1][j + 1]++;
        if (
          i - 1 >= 0 &&
          j + 1 < board.length &&
          board[i - 1][j + 1] &&
          board[i - 1][j + 1] !== 'x'
        )
          board[i - 1][j + 1]++;
        if (j - 1 >= 0 && board[i][j - 1] && board[i][j - 1] !== 'x')
          board[i][j - 1]++;
        if (
          j - 1 >= 0 &&
          i + 1 < board.length &&
          board[i + 1][j - 1] &&
          board[i + 1][j - 1] !== 'x'
        )
          board[i + 1][j - 1]++;
        if (
          j - 1 >= 0 &&
          i - 1 >= 0 &&
          board[i - 1][j - 1] &&
          board[i - 1][j - 1] !== 'x'
        )
          board[i - 1][j - 1]++;
        if (i + 1 < board.length && board[i + 1][j] && board[i + 1][j] !== 'x')
          board[i + 1][j]++;
        if (i - 1 >= 0 && board[i - 1][j] && board[i - 1][j] !== 'x')
          board[i - 1][j]++;
      }
    }
  }
  return board.map((el) => el.map((el2) => (el2 === 'x' ? 'x' : el2 - 1)));
};
