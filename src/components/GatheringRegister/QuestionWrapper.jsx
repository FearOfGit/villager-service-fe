import { QuestionWrapperBlock } from './QuestionWrapper.style';

function QuestionWrapper({ title, children, show }) {
  return (
    <QuestionWrapperBlock show={show}>
      <div className="title">
        <span className="em">{title}</span>
        {` 을(를) 입력하세요`}
      </div>
      {children}
    </QuestionWrapperBlock>
  );
}

export default QuestionWrapper;
