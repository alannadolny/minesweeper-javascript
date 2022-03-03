import CircleIcon from '@mui/icons-material/Circle';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import LooksOneIconOutlined from '@mui/icons-material/LooksOneOutlined';
import LooksTwoIconOutlined from '@mui/icons-material/LooksTwoOutlined';
import Looks3IconOutlined from '@mui/icons-material/Looks3Outlined';
import Looks4IconOutlined from '@mui/icons-material/Looks4Outlined';
import Looks5IconOutlined from '@mui/icons-material/Looks5Outlined';
import Looks6IconOutlined from '@mui/icons-material/Looks6Outlined';

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
    IValue + 1 <= board.length &&
    IValue >= 0 &&
    JValue + 1 <= board.length &&
    JValue >= 0 &&
    board[IValue][JValue] !== 'x'
  )
    board[IValue][JValue]++;
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

export const returnFieldValue = (board, fieldNumber) => {
  if (board[fieldNumber[0]][fieldNumber[1]] === 'x')
    return <CircleIcon key={fieldNumber} fontSize='large' color='error' />;
  else if (board[fieldNumber[0]][fieldNumber[1]] === 0)
    return (
      <CropSquareIcon key={fieldNumber} fontSize='large' color='primary' />
    );
  else {
    if (board[fieldNumber[0]][fieldNumber[1]] === 1)
      return (
        <LooksOneIconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    if (board[fieldNumber[0]][fieldNumber[1]] === 2)
      return (
        <LooksTwoIconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    if (board[fieldNumber[0]][fieldNumber[1]] === 3)
      return (
        <Looks3IconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    if (board[fieldNumber[0]][fieldNumber[1]] === 4)
      return (
        <Looks4IconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    if (board[fieldNumber[0]][fieldNumber[1]] === 5)
      return (
        <Looks5IconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    if (board[fieldNumber[0]][fieldNumber[1]] === 6)
      return (
        <Looks6IconOutlined
          key={fieldNumber}
          fontSize='large'
          color='primary'
        />
      );
    else return board[fieldNumber[0]][fieldNumber[1]];
  }
};

export const checkFieldIndex = (IValue, JValue, length) => {
  if (
    IValue + 1 <= length &&
    IValue >= 0 &&
    JValue + 1 <= length &&
    JValue >= 0
  )
    return true;
  else return false;
};
