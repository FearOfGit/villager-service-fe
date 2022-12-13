import styled from 'styled-components';

export const ContentCounterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1;

  & + div::before {
    content: '';
    height: 30px;
    position: absolute;
    left: -1px;
    top: 2px;
    border-left: 1px solid black;
  }
`;
