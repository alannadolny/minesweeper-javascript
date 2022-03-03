import { Container, Button } from '@mui/material';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

function OptionButtons({ setBoard, board }) {
  const navigate = useNavigate();

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
      <Button
        variant='contained'
        sx={{ margin: '25px 5px 0 5px' }}
        onClick={() => navigate(-1)}
      >
        Back to menu
      </Button>
    </Container>
  );
}

export default OptionButtons;
