import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { newIntroduceAPI } from '../../../api/Users';
import { Wrapper, IntroduceForm, IntroduceSection, Button, } from './ChangeIntroduce.styles';

function ChangeIntroduce(values) {
  const data = values;
  const newNickname = data.nickname;
  const [ newIntroduce, setNewIntroduce ] = useState(data.introduce);
  const handleChange = (value) => {
    setNewIntroduce(value);
  };

  async function ChangeContents() {
    const body = JSON.stringify({ nickname: newNickname, introduce: newIntroduce });
    await newIntroduceAPI(body)
      .then((res)=>{
        console.log(body);
        toast.success(<h1>자기 소개가 성공적으로 변경되었습니다!</h1>);
      })
      .catch((error)=>{
        console.log(error.response.data.message);
      });
  }

  return (
    <>
      <Wrapper>
        <ToastContainer/>
          <IntroduceSection>
              자기소개
              <IntroduceForm
                type="textarea"
                placeholder={data.introduce}
                onChange = {(e)=> {handleChange(e.target.value)}}
              />
              <Button type="button" onClick={()=>{ChangeContents()}}>
                수정하기
              </Button>
          </IntroduceSection>
      </Wrapper>
    </>
  )
}

export default ChangeIntroduce;