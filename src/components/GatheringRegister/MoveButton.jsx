import React from 'react';
import { CustomButton } from './index.style';

function check(step, values, errors, len) {
  if (step === 0) {
    return values.name === '' || errors.name !== undefined;
  }
  if (step === 1) {
    return values.place_text === '' || errors.place_text !== undefined;
  }
  if (step === 2) {
    return values.description === '' || errors.description !== undefined;
  }
  if (step === 3) {
    const result =
      values.start_date === '' ||
      errors.start_date !== undefined ||
      values.end_date === '' ||
      errors.end_date !== undefined;

    return result;
  }
  if (step === 4) {
    const result =
      values.capacity === '' ||
      errors.capacity !== undefined ||
      values.mannerScore === '' ||
      errors.mannerScore !== undefined ||
      values.fee === '' ||
      errors.fee !== undefined;

    return result;
  }
  if (step === 5) {
    return len === 0;
  }

  return false;
}

function MoveButton({ onPrev, onNext, step, values, errors, len }) {
  const disabled = check(step, values, errors, len);

  return (
    <>
      <CustomButton type="button" disabled={step === 0} onClick={onPrev}>
        이전
      </CustomButton>
      <CustomButton type="button" disabled={disabled} onClick={onNext}>
        {step === 5 ? '등록' : '다음'}
      </CustomButton>
    </>
  );
}

export default MoveButton;
