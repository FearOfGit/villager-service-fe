import React from 'react';
import { MdClose } from 'react-icons/md';
import { HeaderInner, HeaderWrapper } from './TownSetupHeader.style';

function TownSetupHeader({ onClose }) {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <button type="button" onClick={onClose}>
          <MdClose />
        </button>
        <h1>네 동네 설정하기</h1>
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default TownSetupHeader;
