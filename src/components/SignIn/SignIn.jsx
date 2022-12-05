import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { ReactComponent as KakaoLogo} from '../../images/kakaologin.svg'

import {
  Wrapper, 
  Desc, 
  SignInForm, 
  ErrorMsg, 
  Input, 
  Button, 
  ButtonKakao, 
  TextBox, 
  FindSection, 
  SignupSection, 
  AdditionalMsg, 
  SignupNavigation, 
} from './SignIn.styles';


function SignIn() {

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('🤔 이메일을 입력하세요!')
      .email('🤔 올바른 이메일 형식이 아닙니다!'),
    password: Yup.string()
      .required('🤔 비밀번호를 입력하세요!'),
  });

  const onSubmit = async (values) => {
    
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailCheck = (errors.email) == null ? '🙂' : errors.email;
  const passwordCheck = (errors.password) == null ? '🙂' : errors.password;

  return (
    <Wrapper>
      <ToastContainer/>
        <Desc>
          동네 #람들에 어서오세요!
          <br />
          오늘도 즐거운 하루! 🥰
          <br />
        </Desc>
        <SignInForm
          autoComplete="off"
          direction="column"
          justifyContent="space-evenly"
          onSubmit={handleSubmit}
        >
          <ErrorMsg>{emailCheck}</ErrorMsg>
          <Input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="이메일"
            onBlur={handleBlur}
          />
          <ErrorMsg>{passwordCheck}</ErrorMsg>
          <Input
            value={values.password}
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="비밀번호"
            onBlur={handleBlur}
          />
          <Button type="submit">로그인하기</Button>
        </SignInForm>
        <ButtonKakao type="button"><KakaoLogo/><TextBox>카카오로 시작하기</TextBox></ButtonKakao>
        <FindSection>
          <AdditionalMsg>이메일 찾기</AdditionalMsg>
          <AdditionalMsg>비밀번호 찾기</AdditionalMsg>
        </FindSection>
        <SignupSection>
          <AdditionalMsg>아직도 동네#람들 회원이 아니신가요?</AdditionalMsg>
          <SignupNavigation>회원가입</SignupNavigation>
        </SignupSection>
    </Wrapper>  
  );
}

export default SignIn;