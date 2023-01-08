import styled from 'styled-components';

export const LabelForm = styled('label')`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const InputForm = styled.input`
  width: 250px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid #000000;
  margin-bottom: ${p => p.theme.space[4]}px;

  :hover {
    outline: none;
    box-shadow: inset 0px -3px 0px -2px ${p => p.theme.colors.colorTitle};
    transition: box-shadow linear 100ms;
  }
  :focus,
  :active {
    outline: none;
    box-shadow: inset 0px -8px 3px -4px ${p => p.theme.colors.colorTitle};
    border-radius: 3px;
    border-color: ${p => p.theme.colors.colorTitle};
    transition: box-shadow linear 500ms;
  }
`;

export const SubmitBtn = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-top: ${p => p.theme.space[3]}px;
  border: 0 solid transparent;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  display: flex;
  justify-content: center;
  align-items: center;
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
