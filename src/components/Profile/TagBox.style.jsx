import styled from 'styled-components';

export const TagBoxWrapper = styled.div`
  margin-top: 1rem;
  .flex {
    /* background-color: red; */
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
  }
  .space {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
  }
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  /* margin-bottom: 0.7rem; */
`;

export const TagInput = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 0.7rem 0.5rem;
  width: 100%;
`;

export const ShowButton = styled.button`
  background: transparent;
  border: none;
  border-radius: 100%;
  padding: 0.2rem;
  margin-left: 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

export const AddButton = styled.button`
  margin-left: 1rem;
  padding: 0.5rem;
  background: #4ab7b6;
  color: #fff;
  border: none;
  border-radius: 5px;
  flex-shrink: 0;
`;

export const TagContainer = styled.div``;

export const Tag = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 0.7rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
`;
