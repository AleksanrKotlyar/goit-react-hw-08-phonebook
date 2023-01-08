import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import MailLockIcon from '@mui/icons-material/MailLock';
import LoginIcon from '@mui/icons-material/Login';
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  Avatar,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    neutral: {
      main: '#eab013ba',
    },
  },
});

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnInputChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      default:
        console.log('Invalid subscription type');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    form.reset();
  };

  return (
    <Container component="div" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#49a09d',
            padding: '20px',
            boxShadow: ' rgb(33 33 33) 0px 2px 10px 1px',
            borderRadius: '5px',
          }}
        >
          <Typography
            variant="h4"
            style={{ fontFamily: 'Ubuntu', fontWeight: '600' }}
          >
            <Avatar
              fontSize="small"
              sx={{ m: 1, bgcolor: 'black', ml: 'auto', mr: 'auto' }}
            >
              <MailLockIcon fontSize="small" />
            </Avatar>
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              variant="standard"
              onChange={handleOnInputChange}
              color="neutral"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              variant="standard"
              onChange={handleOnInputChange}
              color="neutral"
            />

            <Button
              type="submit"
              fullWidth
              size="small"
              variant="contained"
              color="neutral"
              sx={{
                mt: 3,
                mb: 2,
                color: '#0f1111',
                background: '#008296',
              }}
            >
              <Typography
                variant="span"
                style={{ fontFamily: 'Ubuntu', fontWeight: '600' }}
              >
                Log In
              </Typography>

              <LoginIcon
                sx={{
                  ml: '1px',
                }}
                fontSize="18px"
              />
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};
