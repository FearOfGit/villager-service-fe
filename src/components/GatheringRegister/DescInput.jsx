import React from 'react';
import { ErrorText, TextArea } from './index.style';

function DescInput({ errMsg, fieldProps }) {
  return (
    <>
      <ErrorText>{errMsg ? `🤔 ${errMsg}` : '🙂'}</ErrorText>
      <TextArea autoComplete="off" rows={20} {...fieldProps} />
    </>
  );
}

export default DescInput;
