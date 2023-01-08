import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  position: relative;
  padding: 24px;
  background-image: linear-gradient(to left, #134e5e, #71b280);
  border-radius: ${p => p.theme.radii.normal};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CloseBtn = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: black;

  :focus,
  :hover,
  &.active {
    color: #eab013ba;
  }
`;
