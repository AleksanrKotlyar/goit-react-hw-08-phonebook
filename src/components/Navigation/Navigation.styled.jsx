import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  line-height: 1.2;
  padding: 2px;
  border: 1px solid transparent;
  font-weight: 700;
  color: #2a363b;

  :hover,
  :focus {
    color: ${p => p.theme.colors.colorTitle};
    border: 1px solid;
    border-radius: ${p => p.theme.radii.normal};
  }

  &.active {
    color: ${p => p.theme.colors.colorTitle};
  }
`;
