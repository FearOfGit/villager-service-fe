import styled from 'styled-components';

export const MoveButtonWrapper = styled.div`
  margin-top: 2rem;
  button {
    background-color: #4ab7b6;
    color: #fff;
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    & + button {
      margin-left: 2rem;
    }
    &:disabled {
      background-color: gray;
    }
  }
`;
