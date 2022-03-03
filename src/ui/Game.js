import { Container, Box } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useEffect, useState } from 'react';
import OptionButtons from './OptionButtons';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {
  randomizeBombs,
  getUncoveredBoard,
  returnFieldValue,
  checkFieldIndex,
} from './mechanicsFuntions';
import * as _ from 'lodash';

function Game() {
  const getBoard = (fieldsNumber) => {
    return Array.from(Array(fieldsNumber), (_) => []).map((_, firstIndex) => {
      return Array.from(Array(fieldsNumber), (_, secondIndex) => (
        <SquareIcon
          key={[firstIndex, secondIndex]}
          fontSize='large'
          color='primary'
          onClick={() =>
            uncoverEmptyFields(
              [firstIndex, secondIndex],
              getUncoveredBoard(board.bombs, 8)
            )
          }
        />
      ));
    });
  };

  const [board, setBoard] = useState({
    board: getBoard(8),
    option: 'Empty field',
    bombs: randomizeBombs(8, 0.1),
    uncoveredBoard: [],
  });

  useEffect(() => {
    setBoard((currentBoard) => {
      return {
        ...currentBoard,
        uncoveredBoard: getUncoveredBoard(currentBoard.bombs, 8),
      };
    });
  }, [board.bombs]);

  const makeMove = (indexes) => {
    setBoard((currentBoard) => {
      return {
        ...currentBoard,
        board: currentBoard.board.map((row, index) => {
          if (indexes[0] === index)
            return row.map((field, fieldIndex) => {
              if (fieldIndex === indexes[1]) {
                if (currentBoard.option === 'Bomb')
                  return (
                    <SportsScoreIcon
                      fontSize='large'
                      color='primary'
                      key={[index, fieldIndex]}
                    />
                  );
                if (currentBoard.option === 'Question mark')
                  return (
                    <QuestionMarkIcon
                      fontSize='large'
                      color='primary'
                      key={[index, fieldIndex]}
                    />
                  );
                else
                  return returnFieldValue(currentBoard.uncoveredBoard, indexes);
              } else return field;
            });
          else return row;
        }),
      };
    });
  };

  const uncoverEmptyFields = (fieldNumbers, uncoveredBoard) => {
    const [i, j] = fieldNumbers;
    const length = uncoveredBoard.length;
    if (uncoveredBoard[i][j] === 'f') return;
    makeMove(fieldNumbers);
    const newUncoveredBoard = uncoveredBoard.map((row, firstIndex) => {
      if (firstIndex === i)
        return row.map((field, secondIndex) => {
          if (secondIndex === j) return 'f';
          else return field;
        });
      else return row;
    });
    if (uncoveredBoard[i][j] === 0) {
      if (checkFieldIndex(i + 1, j, length))
        uncoverEmptyFields([i + 1, j], newUncoveredBoard);
      if (checkFieldIndex(i - 1, j, length))
        uncoverEmptyFields([i - 1, j], newUncoveredBoard);
      if (checkFieldIndex(i, j + 1, length))
        uncoverEmptyFields([i, j + 1], newUncoveredBoard);
      if (checkFieldIndex(i, j - 1, length))
        uncoverEmptyFields([i, j - 1], newUncoveredBoard);
      if (checkFieldIndex(i + 1, j + 1, length))
        uncoverEmptyFields([i + 1, j + 1], newUncoveredBoard);
      if (checkFieldIndex(i - 1, j - 1, length))
        uncoverEmptyFields([i - 1, j - 1], newUncoveredBoard);
      if (checkFieldIndex(i + 1, j - 1, length))
        uncoverEmptyFields([i + 1, j - 1], newUncoveredBoard);
      if (checkFieldIndex(i - 1, j + 1, length))
        uncoverEmptyFields([i - 1, j + 1], newUncoveredBoard);
    }
  };

  return (
    <Container sx={{ display: 'flex', marginTop: '50px' }}>
      <OptionButtons setBoard={setBoard} board={board} />
      <Box sx={{ width: '600px' }}>
        {board.board.map((el, index) => (
          <div key={index}> {el} </div>
        ))}
      </Box>
    </Container>
  );
}

export default Game;
