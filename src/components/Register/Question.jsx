import React from 'react';
import { InputWrapper, QuestionWrapper } from './Question.style';

const typeByStep = ['text', 'text', '', 'number', 'number', 'date', 'text'];

function BasicInput({ name, type, fieldProps, disabled }) {
  return (
    <input
      className="basic-input"
      disabled={disabled}
      id={name}
      type={type}
      autoComplete="off"
      {...fieldProps}
    />
  );
}

function TextAreaForContent({ name, fieldProps }) {
  return (
    <textarea className="basic-input" id={name} rows={20} {...fieldProps} />
  );
}

function Question({ step, title, name, errMsg, fieldProps, prev, next }) {
  return (
    <QuestionWrapper prev={prev} next={next}>
      <label className="title" htmlFor={name}>
        {title}
      </label>
      <InputWrapper>
        <span className="err-message">{errMsg || '🙂'}</span>
        {step !== 2 && step !== 6 && (
          <BasicInput
            name={name}
            type={typeByStep[step]}
            fieldProps={fieldProps}
            disabled={step === 1}
          />
        )}
        {step === 2 && (
          <TextAreaForContent name={name} fieldProps={fieldProps} />
        )}
      </InputWrapper>
    </QuestionWrapper>
  );
}

export default Question;
