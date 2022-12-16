import React from 'react';
import { CommonInput, ErrorText, SubTitleText } from './index.style';

function OthersInput({
  capacityErrMsg,
  scoreErrMsg,
  feeErrMsg,
  capacityFieldProps,
  scoreFieldProps,
  feeFieldProps,
}) {
  return (
    <>
      <SubTitleText>인원수</SubTitleText>
      <ErrorText>{capacityErrMsg ? `🤔 ${capacityErrMsg}` : '🙂'}</ErrorText>
      <CommonInput type="number" {...capacityFieldProps} />
      <SubTitleText>매너 점수</SubTitleText>
      <ErrorText>{scoreErrMsg ? `🤔 ${scoreErrMsg}` : '🙂'}</ErrorText>
      <CommonInput type="number" {...scoreFieldProps} />
      <SubTitleText>참가비</SubTitleText>
      <ErrorText>{feeErrMsg ? `🤔 ${feeErrMsg}` : '🙂'}</ErrorText>
      <CommonInput type="number" {...feeFieldProps} />
    </>
  );
}

export default OthersInput;
