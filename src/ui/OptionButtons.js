import { Container, Button } from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClearIcon from '@mui/icons-material/Clear';

function OptionButtons({ setBoard, board }) {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', width: '400px' }}
    >
      {['Empty field', 'Bomb', 'Question mark'].map((btn) => {
        return (
          <Button
            variant='contained'
            sx={{ margin: '5px' }}
            onClick={() => setBoard({ ...board, option: btn })}
            key={btn}
          >
            {btn}{' '}
            {btn === 'Empty field' ? (
              <ClearIcon />
            ) : btn === 'Bomb' ? (
              <SportsScoreIcon />
            ) : (
              <QuestionMarkIcon />
            )}{' '}
          </Button>
        );
      })}
    </Container>
  );
}

export default OptionButtons;
