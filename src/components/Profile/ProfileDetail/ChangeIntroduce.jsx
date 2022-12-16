import React, { useState } from 'react';
import { IntroduceForm, IntroduceSection, Button, } from './ChangeIntroduce.styles';

function ChangeIntroduce(introduce) {
  return (
    <>
      <IntroduceSection>
          자기소개
          <IntroduceForm
            type="textarea"
            placeholder={Object.values(introduce)}
          />
          <Button type="submit">
            수정하기
          </Button>
      </IntroduceSection>
    </>
  )
}

export default ChangeIntroduce;