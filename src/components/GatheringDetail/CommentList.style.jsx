import styled, { css } from 'styled-components';

export const CommentListWrapper = styled.ul`
  max-height: 500px;
  padding: 0 0.5rem;
  margin-bottom: 2rem;

  li {
    padding: 1rem;
    font-size: 0.8rem;
    border-bottom: 1px solid #ccc;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const UserName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  ${(props) =>
    props.owner &&
    css`
      font-weight: 700;
    `}
`;

export const UserComment = styled.p`
  font-size: 1rem;
`;
