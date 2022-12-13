import styled from 'styled-components';

export const MoveButtonBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  padding: 0 2rem;
  justify-content: space-between;
  position: fixed;
  bottom: 100px;
  button {
    border: 1px solid black;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-color: transparent;
    font-size: 2rem;
    color: #4ab7b6;
    & + button {
      margin-left: 2rem;
    }
  }
`;
