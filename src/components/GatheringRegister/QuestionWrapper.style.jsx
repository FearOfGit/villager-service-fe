import styled, { css } from 'styled-components';
import palette from '../../lib/palette';

export const QuestionWrapperBlock = styled.div`
  margin-bottom: 4rem;
  transform: translateX(-100%);
  transition: transform 1s;
  visibility: hidden;
  position: absolute;
  ${(props) =>
    props.show &&
    css`
      transform: translateX(0%);
      visibility: visible;
      position: relative;
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
