import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Wrapper, UserName, LogOut } from './UserMenu.styled';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOut to="/" onClick={() => dispatch(logOut())}>
        <Typography
          variant="span"
          style={{ fontFamily: 'Ubuntu', fontWeight: '600' }}
        >
          Log Out
        </Typography>
        <LogoutIcon
          sx={{
            ml: 1,
          }}
          fontSize="10px"
        />
      </LogOut>
    </Wrapper>
  );
};
