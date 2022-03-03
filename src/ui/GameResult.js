import { Container, Alert, AlertTitle } from '@mui/material';

function GameResult({ result }) {
  return (
    <Container sx={{ marginTop: '20px' }}>
      {!result ? (
        <Alert severity='error'>
          <AlertTitle>You lose!</AlertTitle>
          Next time try to <strong>avoid</strong> bombs!
        </Alert>
      ) : (
        <Alert severity='success'>
          <AlertTitle>You won!</AlertTitle>
          Bravo to you! You <strong>found</strong> all bombs!
        </Alert>
      )}
    </Container>
  );
}

export default GameResult;
