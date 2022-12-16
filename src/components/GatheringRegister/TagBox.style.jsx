import styled from 'styled-components';

export const TagInput = styled.input`
  padding: 0.5rem 0.7rem;
  border: 1px solid black;
  border-radius: 15px;
  outline: none;
  flex: 1;
  margin-right: 0.5rem;
`;

export const TagButton = styled.button`
  background: #4ab7b6;
  color: #fff;
  border: none;
  border-radius: 10px;
  &:disabled {
    display: none;
  }
`;

export const TagListWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;

  span {
    background-color: #fdaa5d;
    color: #fff;
    border-radius: 10px;
    padding: 0.4rem;
    font-size: 0.5rem;
    & + span {
      margin-left: 0.2rem;
    }
  }
`;
