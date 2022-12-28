import styled from 'styled-components';

export const MainTemplate = styled.main`
  margin-top: 1rem;
  margin-bottom: 7rem;
  .flex {
    display: flex;
    align-items: center;
  }
  .flex-2 {
    margin-top: 0.7rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .map {
    margin-top: 2rem;
    height: 200px;
    background: grey;
  }
`;

export const RegisterButton = styled.button`
  position: fixed;
  bottom: 90px;
  right: 5%;
  padding: 1rem;
  border-radius: 100%;
  border: none;
  font-size: 1.2rem;
  background: #fdaa5d;
  color: #fff;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;
