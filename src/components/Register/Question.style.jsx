import styled, { css } from 'styled-components';

export const QuestionWrapper = styled.div`
  transition: transform 0.5s;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${(props) =>
    props.prev &&
    css`
      transform: translateX(-100%);
      width: 0;
      height: 0;
    `}
  ${(props) =>
    props.next &&
    css`
      transform: translateX(100%);
      width: 0;
      height: 0;
    `}
  
  .title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  .basic-input {
    width: 100%;
    border-radius: 20px;
    padding: 1rem;
  }
  .err-message {
    display: inline-block;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    padding-left: 0.8rem;
  }
`;
