import styled from 'styled-components';

export const CommentInputWrapper = styled.div`
  display: flex;
  .input {
    width: 100%;
    resize: none;
    padding: 0.8rem;
    border-radius: 5px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: end;
    flex-shrink: 0;
  }
`;

export const CommentButton = styled.button`
  display: block;
  padding: 0.5rem;
  margin-left: 0.8rem;
`;
