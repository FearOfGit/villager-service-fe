import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { signUpAPI } from '../../api/Users';

import { 
  Wrapper,
  SignUpForm,
  ErrorMsg,
  Input,
  GenderContainer,
  GenderButton,
  Button,
  IntroductionInput,
} from './SignUp.styles';

function SignUp() {
  const navigate = useNavigate();
  const [ gender, setGender ] = useState("");
  
  const setMan = () => {
    setGender("MAN");
  };
  
  const setWoman = () => {
    setGender("WOMAN");
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('🤔 올바른 이메일 형식이 아닙니다!')
      .required('🤔 이메일을 입력하세요!'),
      nickname: Yup.string()
      .min(2, '🤔 닉네임은 최소 2글자 이상입니다!')
      .max(10, '🤔 닉네임은 최대 10글자입니다!')
      .required('🤔 닉네임을 입력하세요!'),
      password: Yup.string()
      .min(8, '🤔 비밀번호는 최소 8자리 이상입니다!')
      .max(16, '🤔 비밀번호는 최대 16자리입니다!')
      .required('🤔 비밀번호를 입력하세요!')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>?])[^\s]*$/,
        '🤔 영어, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다!',
        ),
        passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], '🤔 비밀번호가 일치하지 않습니다!')
        .required('🤔 비밀번호 확인을 입력하세요!'),
        birth: Yup.string()
        .required('🤔 생일을 선택해주세요!'),
        gender: Yup.string()
        .required('🤔 성별을 선택해주세요!'),
        introduce: Yup.string()
      .required('🤔 자기소개를 적어주세요!')
    });
    
  const onSubmit = async (values) => {
    const body = { ...values };
    console.log(body);
    await signUpAPI(body)
      .then(() => {
        console.log('제발 되어라!');
        toast.success(<h1>회원가입이 완료되었습니다. 😊</h1>);
        setTimeout(() => {
          navigate('/signIn');
        }, 1500);
      })
      .catch((e) => {
        console.log('제발 되라니깡');
        toast.error(e.response.data.errorMessage);
      });
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      passwordConfirm: '',
      gender: '',
      birth: '',
      introduce: '',
    },
    validationSchema,
    setMan,
    setWoman,
    onSubmit,
  });
  
  values.gender = gender;

  const emailCheck = (errors.email) == null ? '🙂' : errors.email;
  const nicknameCheck = (errors.nickname) == null ? '🙂' : errors.nickname;
  const passwordCheck = (errors.password) == null ? '🙂' : errors.password;
  const passwordConfirmCheck = (errors.passwordConfirm) == null ? '🙂' : errors.passwordConfirm;
  const birthCheck = (errors.birth) == null ? '🙂' : errors.birth;
  const genderCheck = (errors.gender) == null ? '🙂' : errors.gender;
  const introduceCheck = (errors.introduce) == null ? '🙂' : errors.introduce;

  return (
    <>
      <Wrapper>
        <ToastContainer/>
        <SignUpForm
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
          <ErrorMsg>{nicknameCheck}</ErrorMsg>
          <Input
            value={values.nickname}
            onChange={handleChange}
            id="nickname"
            type="text"
            placeholder="닉네임"
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
          <ErrorMsg>{passwordConfirmCheck}</ErrorMsg>
          <Input
            value={values.passwordConfirm}
            onChange={handleChange}
            id="passwordConfirm"
            type="password"
            placeholder="비밀번호 확인"
            onBlur={handleBlur}
          />
          <ErrorMsg>{birthCheck}</ErrorMsg>
          <Input
            value={values.birth}
            onChange={handleChange}
            id="birth"
            type="date"
            placeholder="생년월일"
            onBlur={handleBlur}
          />
          <ErrorMsg>{genderCheck}</ErrorMsg>
          <GenderContainer>
            <GenderButton
              value={values.gender}
              type="button"
              onClick={setMan}
              id="MAN"
            >남</GenderButton>
            <GenderButton
              value={values.gender}
              type="button"
              onClick={setWoman}
              id="WOMAN"
            >여</GenderButton>
          </GenderContainer>
          <ErrorMsg>{introduceCheck}</ErrorMsg>
          <IntroductionInput
            value={values.introduce}
            onChange={handleChange}
            id="introduce"
            type="textarea"
            placeholder="자기소개"
            onBlur={handleBlur}
          />
          <Button type="submit">회원가입하기</Button>
        </SignUpForm>
      </Wrapper>
    </>
  );
}

export default SignUp;