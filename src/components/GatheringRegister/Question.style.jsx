import styled, { css } from 'styled-components';

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  transition: transform 0.5s;
  ${(props) =>
    props.prev &&
    css`
      width: 0;
      height: 0;
      visibility: hidden;
      transform: translateX(-1000px);
    `}
  ${(props) =>
    props.next &&
    css`
      width: 0;
      height: 0;
      visibility: hidden;
      transform: translateX(3000px);
    `}
`;

export const TitleText = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 700;
`;
