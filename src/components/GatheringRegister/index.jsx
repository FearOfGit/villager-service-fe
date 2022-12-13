/* eslint-disable no-shadow */
import { useState } from 'react';
import { RegisterTemplate } from './index.style';
import { questions } from './lib/questions';
import useForm from './hooks/useForm';
import QuestionWrapper from './QuestionWrapper';
import MoveButton from './MoveButton';

function GathringRegister() {
  const [step, setStep] = useState(1);
  const { formik } = useForm();

  const onNext = async () => {
    if (step === 6) {
      formik.handleSubmit();
      return;
    }

    console.log(formik.touched.gatheringName, formik.errors.gatheringName);

    setStep(step + 1);
  };

  const onPrev = () => {
    if (step === 1) return;

    setStep(step - 1);
  };

  return (
    <RegisterTemplate>
      <form>
        {questions.map((question) => (
          <QuestionWrapper
            prev={step > question.step}
            next={step < question.step}
            key={question.step}
            title={question.title}
          >
            {question.child}
          </QuestionWrapper>
        ))}
        <MoveButton step={step} onPrev={onPrev} onNext={onNext} />
      </form>
    </RegisterTemplate>
  );
}

export default GathringRegister;
