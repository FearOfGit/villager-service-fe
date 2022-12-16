import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { newPasswordAPI } from '../../../api/Users';

import { Wrapper, Modal, Title, ModalInput, ButtonSection, SubmitBtn, CancelBtn, } from '../Modal.styles';

function ChangePassword ({ modal }) {
  const [message, setMessage] = useState('');

  const Cancel = () => {
    modal(false);
  };

  const validateNew = async (newPassword) => {
    const body = JSON.stringify({ password: newPassword });
    await newPasswordAPI(body)
      .then((res)=>{
        console.log(body);
        toast.success(<h1>비밀번호가 성공적으로 변경되었습니다!</h1>);
        setTimeout(()=>{
          modal(false);}, 1000);
      })
      .catch((error)=>{
        setMessage(error.response.data.message);
      });
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      // currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    },
    validationSchema: Yup.object().shape({
      newPassword: Yup
        .string()
        .min(8, '비밀번호는 최소 8자리 이상입니다!')
        .max(16, '비밀번호는 최대 16자리입니다!')
        .matches(
          // eslint-disable-next-line
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[^\s]*$/,
          '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다.',
        )
        .required('새 비밀번호를 입력해주세요.'),
      newPasswordConfirm: Yup
        .string()
        .oneOf([Yup.ref('newPassword'), null], '비밀번호가 일치하지 않습니다!')
        .required('새 비밀번호 확인을 입력해주세요.'),
    }),
    onSubmit: async (value) => {
      validateNew(value.newPassword);
    },
  });

  return (
    <>
    <ToastContainer/>
    <Wrapper>
      <Modal onSubmit={handleSubmit}>
        <Title>비밀번호 수정</Title>
        <ModalInput
          type="password"
          name="newPassword"
          placeholder="새 비밀번호"
          values={values.newPassword}
          onChange={handleChange}
        />
        <ModalInput
          type="password"
          name="newPasswordConfirm"
          placeholder="새 비밀번호 확인"
          values={values.newPasswordConfirm}
          onChange={handleChange}
        />
        <ButtonSection>
          <SubmitBtn type="submit">
            수정하기
          </SubmitBtn>
          <CancelBtn type="button" onClick={Cancel}>
            닫기
          </CancelBtn>
        </ButtonSection>
      </Modal>  
    </Wrapper>
    </>
  )

}

export default ChangePassword;