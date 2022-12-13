import styled from 'styled-components';

export const TagBoxWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  input {
    flex: 2;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    margin-right: 0.5rem;
  }
  button {
    border-radius: 10px;
    border: none;
    background-color: #4ab7b6;
    color: #fff;

    &:disabled {
      display: none;
    }
  }
`;

export const TagListWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;

  span {
    background-color: #fdaa5d;
    color: #fff;
    border-radius: 10px;
    padding: 0.4rem;
    font-size: 0.5rem;
    & + span {
      margin-left: 1rem;
    }
  }
`;
