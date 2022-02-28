import { Container, Box } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useState } from 'react';
import OptionButtons from './OptionButtons';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Game() {
  const getBoard = (fieldsNumber) => {
    return Array.from(Array(fieldsNumber), (_) => []).map((_, firstIndex) => {
      return Array.from(Array(fieldsNumber), (_, secondIndex) => (
        <SquareIcon
          key={[firstIndex, secondIndex]}
          fontSize='large'
          color='primary'
          onClick={(event) => makeMove([firstIndex, secondIndex])}
        />
      ));
    });
  };

  const [board, setBoard] = useState({
    board: getBoard(8),
    option: 'Empty field',
  });

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
                else
                  return (
                    <QuestionMarkIcon
                      fontSize='large'
                      color='primary'
                      key={[index, fieldIndex]}
                    />
                  );
              } else return field;
            });
          else return row;
        }),
      };
    });
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
