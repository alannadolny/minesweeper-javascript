import { Chip } from '@mui/material';
import * as _ from 'lodash';
import { useEffect } from 'react';

function BombCounter({ board, foundBombs, setWin }) {
  const getBombsQuantity = (board) => {
    let counter = 0;
    board.forEach((row) => {
      row.forEach((field) => {
        if (field === 'x') counter++;
      });
    });
    return counter;
  };

  useEffect(() => {
    if (foundBombs === getBombsQuantity(board)) setWin(true);
    else setWin(null);
  }, [foundBombs, getBombsQuantity(board)]);

  return (
    <Chip
      sx={{ marginTop: '20px' }}
      color='primary'
      label={`Bombs counter: ${getBombsQuantity(board)}`}
    />
  );
}

export default BombCounter;
