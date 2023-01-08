import { Link } from './AuthNav.styled';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const AuthNav = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/register">
        <span>Register</span>
        <AppRegistrationIcon
          sx={{
            ml: '1px',
          }}
          fontSize="18px"
        />
      </Link>
      <Link to="/login">
        <span>Log In</span>
        <LoginIcon
          sx={{
            ml: '1px',
          }}
          fontSize="10px"
        />
      </Link>
    </div>
  );
};
