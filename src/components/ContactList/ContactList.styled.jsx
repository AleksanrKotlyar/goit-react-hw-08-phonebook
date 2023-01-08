import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;

  background-color: ${p => p.theme.colors.inputColor};
  border-radius: ${p => p.theme.radii.normal};
  padding-left: ${p => p.theme.space[3]}px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
