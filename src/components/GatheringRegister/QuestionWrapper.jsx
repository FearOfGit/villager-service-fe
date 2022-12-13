import { QuestionWrapperBlock } from './QuestionWrapper.style';

function QuestionWrapper({ title, children, prev, show, next }) {
  return (
    <QuestionWrapperBlock prev={prev} show={show} next={next}>
      <div className="title">
        <span className="em">{title}</span>
        {` 을(를) 입력하세요`}
      </div>
      {children}
    </QuestionWrapperBlock>
  );
}

export default QuestionWrapper;
