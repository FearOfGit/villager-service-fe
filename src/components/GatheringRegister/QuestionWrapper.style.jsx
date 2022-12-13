import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

export const QuestionWrapperBlock = styled.div`
  transition: transform 0.5s;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 1rem;
  ${(props) =>
    props.prev &&
    css`
      visibility: hidden;
      transform: translateX(-200%);
      width: 0px;
      height: 0px;
    `}
  ${(props) =>
    props.next &&
    css`
      visibility: hidden;
      transform: translateX(200%);
      width: 0px;
      height: 0px;
    `}
  .title {
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 1rem;
    padding-bottom: 0.7rem;
    border-bottom: 3px solid ${palette.gray[5]};
  }
  .em {
    color: #4ab7b6;
  }
`;
