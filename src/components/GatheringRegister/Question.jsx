import React from 'react';
import { QuestionWrapper, TitleText } from './Question.style';

function Question({ children, prev, next, title }) {
  return (
    <QuestionWrapper prev={prev} next={next}>
      <TitleText>{title}</TitleText>
      {children}
    </QuestionWrapper>
  );
}

export default Question;
