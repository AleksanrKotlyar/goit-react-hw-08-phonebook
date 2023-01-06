import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  /* border-bottom: 1px solid #2a363b; */
  padding: 5px;

  box-shadow: ${p => p.theme.shadows.regular};
  /* box-shadow: #181b1a3b; */
  border-bottom-left-radius: ${p => p.theme.space[3]}px;
  border-bottom-right-radius: ${p => p.theme.space[3]}px;
`;
