import React from 'react';
import { MoveButtonWrapper } from './MoveButton.style';

function MoveButton({ step, last, taglen, onPrev, onNext, error, value }) {
  const disabled = last ? taglen === 0 : value === '' || error !== undefined;
  return (
    <MoveButtonWrapper>
      <button disabled={step === 0} type="button" onClick={onPrev}>
        이전
      </button>
      <button disabled={disabled} type="button" onClick={onNext}>
        {last ? '등록' : '다음'}
      </button>
    </MoveButtonWrapper>
  );
}

export default MoveButton;
