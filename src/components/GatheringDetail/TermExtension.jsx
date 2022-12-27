import React, { useEffect, useState } from 'react';
import { extensionGatheringAPI } from '../../api/gathering';
import {
  DateInput,
  DrawerWrapper,
  Inner,
  InputWrapper,
  SubmitButton,
  Title,
} from './TermExtension.style';

function TermExtension({ searchId, refetch, setIsOpen }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSumbit = async () => {
    const response = await extensionGatheringAPI(searchId, inputValue);
    console.log(response);
    setIsOpen(false);
    setInputValue('');
    refetch();
  };

  return (
    <DrawerWrapper>
      <Inner>
        <Title>기간 연장하기</Title>
        <InputWrapper>
          <DateInput type="date" value={inputValue} onChange={handleChange} />
          <SubmitButton type="button" onClick={handleSumbit}>
            확인
          </SubmitButton>
        </InputWrapper>
      </Inner>
    </DrawerWrapper>
  );
}

export default TermExtension;
