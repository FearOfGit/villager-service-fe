import styled from 'styled-components';

export const CommentListWrapper = styled.ul`
  max-height: 500px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;

  li {
    padding: 1rem;
    font-size: 0.8rem;
    border-bottom: 1px solid #ccc;
    &:first-child {
      border-top: 1px solid #ccc;
    }
  }
`;

export const Title = styled.h2`
  /* background-color: red; */
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
