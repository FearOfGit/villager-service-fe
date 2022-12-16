import React from 'react';
import { CommonInput, ErrorText } from './index.style';
import Map from './Map';

function PlaceInput({ errMsg, fieldProps, setFieldValue, isMap }) {
  return (
    <>
      <ErrorText>{errMsg ? `🤔 ${errMsg}` : '🙂'}</ErrorText>
      <CommonInput disabled type="text" autoComplete="off" {...fieldProps} />
      <Map setFieldValue={setFieldValue} isMap={isMap} />
    </>
  );
}

export default PlaceInput;
