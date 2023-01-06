import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import MailLockIcon from '@mui/icons-material/MailLock';
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
      main: '#564926ba',
    },
  },
});

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleOnInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
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
      register({
        name: name,
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
            style={{ fontFamily: 'Caveat', fontWeight: '600' }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black', ml: 'auto', mr: 'auto' }}>
              <MailLockIcon />
            </Avatar>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="User Name"
              name="name"
              autoComplete="name"
              value={name}
              variant="outlined"
              onChange={handleOnInputChange}
              color="neutral"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              variant="outlined"
              onChange={handleOnInputChange}
              color="neutral"
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
              variant="outlined"
              onChange={handleOnInputChange}
              color="neutral"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="neutral"
              sx={{ mt: 3, mb: 2, color: '#0f1111', background: '#008296' }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
};
