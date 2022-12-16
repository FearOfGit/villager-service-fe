import styled from 'styled-components';
import palette from '../../../lib/palette';
import Responsive from '../../common/Responsive';

export const HeaderWrapper = styled.div`
  height: 4rem;
  border-bottom: 1px solid ${palette.gray[1]};
  display: flex;
  align-items: center;
`;

export const HeaderInner = styled(Responsive)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 1.2rem;
  }
  button {
    position: absolute;
    left: 3%;
    border: none;
    background-color: transparent;
    font-size: 1.1rem;
  }
`;
