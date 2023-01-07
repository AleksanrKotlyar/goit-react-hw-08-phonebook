import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const LogOut = styled(NavLink)`
  margin-right: auto;
  margin-left: ${p => p.theme.space[4]}px;
  border: 0 solid transparent;
  color: ${p => p.theme.colors.textDark};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: inset -2px -2px 4px 0 #222222;
  cursor: pointer;
  transition: color ease-in-out 200ms, box-shadow ease-in-out 200ms;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.colorInteract};

    box-shadow: inset -2px -2px 4px 0 ${p => p.theme.colors.colorTitle};
  }
  :active {
    background-color: ${p => p.theme.colors.colorInteract};
    box-shadow: inset 2px 2px 4px 0 ${p => p.theme.colors.colorTitle};
  }
`;
