import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOutAPI } from '../../../api/Users';
import { Wrapper, Modal, ContentSection, Content, ButtonSection, SubmitBtn, CancelBtn } from '../Modal.styles';

function SignOut ({ modal }) {
  const cancel = () => {
    modal(false);
  };

  const deleteUser = async () => {
    await signOutAPI()
      .then((res)=>{
        toast.success(<h1>회원 탈퇴가 성공적으로 완료되었씁니다!</h1>)
        setTimeout(()=>{
          modal(false);
        }, 1000);
      })
      .catch((error)=>{
        toast.error(error.response.data.message);
      })
  }

  return (
    <>
    <ToastContainer/>
    <Wrapper>
      <Modal>
        <ContentSection>
          <Content>
            정말로 동네#람들을
            <br/>
            탈퇴하시겠습니까? 😢
          </Content>
        </ContentSection>
        <ButtonSection>
          <SubmitBtn type="button" onClick={deleteUser}>
            탈퇴하기
          </SubmitBtn>
          <CancelBtn type="button" onClick={cancel}>
            닫기
          </CancelBtn>
        </ButtonSection>
      </Modal>
    </Wrapper>
    </>
  );
}

export default SignOut;