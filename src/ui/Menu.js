import {
  Container,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { beginner, advanced, expert } from './gameOptions';

function Menu({ setDifficultyLevel }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <Typography variant='h4' color='primary'>
          Choose the difficulty level
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box>
          <Card
            sx={{ width: 345, margin: '10px' }}
            onClick={() => {
              setDifficultyLevel(beginner);
              navigate('/game');
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='primary'
                >
                  Beginner
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Board 8x8, with 15% bombs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{ width: 345, margin: '10px' }}
            onClick={() => {
              setDifficultyLevel(advanced);
              navigate('/game');
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='primary'
                >
                  Advanced{' '}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Board 16x16, with 15% bombs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box>
          <Card
            sx={{ width: 345, margin: '10px' }}
            onClick={() => {
              setDifficultyLevel(expert);
              navigate('/game');
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='div'
                  color='primary'
                >
                  Expert
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Board 30x30, with 20% bombs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

export default Menu;
