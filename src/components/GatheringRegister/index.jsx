import { useState } from 'react';
import { RegisterTemplate } from './index.style';
import QuestionWrapper from './QuestionWrapper';
import { questions } from './lib/questions';
import RegisterButton from './RegisterButton';

function GathringRegister() {
  const [step, setStep] = useState(1);

  const onNext = () => {
    if (step === 6) return;

    setStep(step + 1);
  };

  return (
    <RegisterTemplate>
      {questions.map((question) => (
        <QuestionWrapper
          show={step >= question.step}
          key={question.step}
          title={question.title}
        >
          {question.child}
        </QuestionWrapper>
      ))}
      <RegisterButton step={step} onNext={onNext} />
    </RegisterTemplate>
  );
}

export default GathringRegister;
