import React, { useState } from 'react';
import { Wrapper, Modal, ContentSection, Content, ButtonSection, SubmitBtn, CancelBtn } from './TownListModal.style';

function TownList ({ modal, townInfo }) {
  const cancel = () => {
    modal(false);
  };

  const townList = townInfo.slice(0, 10);
  return (
    <>
      <Wrapper>
        <Modal>
          <ContentSection>
            {townList.map((town) => (
              <Content
                key={town.index}
              >
                {town.name}
              </Content>
            ))}
          </ContentSection>
          <ButtonSection>
            <CancelBtn type="button" onClick={cancel}>
              닫기
            </CancelBtn>
          </ButtonSection>
        </Modal>
      </Wrapper>
    </>
  );
}

export default TownList;