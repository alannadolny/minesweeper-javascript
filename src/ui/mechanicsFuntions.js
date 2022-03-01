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

const changeFieldValue = (board, IValue, JValue) => {
  if (
    IValue + 1 < board.length &&
    IValue - 1 >= 0 &&
    JValue + 1 < board.length &&
    JValue - 1 >= 0 &&
    board[IValue][JValue] !== 'x'
  )
    ++board[IValue][JValue];
  return board;
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
        board = changeFieldValue(board, i, j + 1);
        board = changeFieldValue(board, i + 1, j + 1);
        board = changeFieldValue(board, i - 1, j + 1);
        board = changeFieldValue(board, i, j - 1);
        board = changeFieldValue(board, i + 1, j - 1);
        board = changeFieldValue(board, i - 1, j - 1);
        board = changeFieldValue(board, i + 1, j);
        board = changeFieldValue(board, i - 1, j);
      }
    }
  }
  return board.map((el) => el.map((el2) => (el2 === 'x' ? 'x' : el2 - 1)));
};
