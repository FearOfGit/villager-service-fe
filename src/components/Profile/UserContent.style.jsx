import styled from 'styled-components';

export const UserContentBlock = styled.div`
  margin-top: 2rem;
  border: 1px solid black;
  border-radius: 7px;
  padding: 1rem;
  .title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.7rem;
  }
  .title::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 17px;
    background-color: black;
    margin-right: 0.5rem;
  }
`;
