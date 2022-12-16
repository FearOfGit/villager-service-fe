import React from 'react';
import { CommonInput, ErrorText, SubTitleText } from './index.style';

function DateInput({ startErrMsg, endErrMsg, startFieldProps, endFieldProps }) {
  return (
    <>
      <SubTitleText>시작일</SubTitleText>
      <ErrorText>{startErrMsg ? `🤔 ${startErrMsg}` : '🙂'}</ErrorText>
      <CommonInput type="date" {...startFieldProps} />
      <SubTitleText>종료일</SubTitleText>
      <ErrorText>{endErrMsg ? `🤔 ${endErrMsg}` : '🙂'}</ErrorText>
      <CommonInput type="date" {...endFieldProps} />
    </>
  );
}

export default DateInput;
