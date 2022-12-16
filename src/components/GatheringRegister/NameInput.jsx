import React from 'react';
import { CommonInput, ErrorText } from './index.style';

function NameInput({ errMsg, fieldProps }) {
  return (
    <>
      <ErrorText>{errMsg ? `🤔 ${errMsg}` : '🙂'}</ErrorText>
      <CommonInput type="text" autoComplete="off" {...fieldProps} />
    </>
  );
}

export default NameInput;
