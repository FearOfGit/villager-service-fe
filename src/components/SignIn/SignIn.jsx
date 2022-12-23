import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import { setUserId } from '../../store/User';
import { signInAPI, signInOAuthGoogleAPI } from '../../api/Users';
import { setRefreshToken, setAccessToken, setAuthentication } from '../../app';
import {LoginButtonGoogle, LoginButtonNaver, LoginButtonKakao} from './OAuth/index';
import imageUrl from '../../images/title5.png';

import {
  Wrapper,
  Desc,
  TitleDesc,
  TitleImage,
  SignInForm,
  ErrorMsg,
  Input,
  Button,
  FindSection,
  SignupSection,
  AdditionalMsg,
  SignupNavigation,
} from './SignIn.styles';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setToken = (data) => {
    // axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    setRefreshToken(data.refreshToken);
    setAccessToken(data.accessToken);
    setAuthentication(true);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('🤔 이메일을 입력하세요!')
      .email('🤔 올바른 이메일 형식이 아닙니다!'),
    password: Yup.string().required('🤔 비밀번호를 입력하세요!'),
  });

  const onSubmit = async (values) => {
    const body = { ...values };
    await signInAPI(body)
      .then((response) => {
        console.log(response.data);
        setToken(response.data);
        localStorage.setItem(
          'expiresAt',
          moment().add(8, 'minutes').format('yyyy-MM-DD HH:mm:ss'),
        ); // moment
        dispatch(setUserId(response.data.loginMemberId));
        toast.success(<h3>성공적으로 로그인했습니다! 😊</h3>);

        setTimeout(() => {
          navigate('/');
        }, 1500);
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.response.data.errorMessage);
      });
  };

  const onClick = async () => {
    await signInOAuthGoogleAPI().then((response) => {
      console.log(response);
    });
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailCheck = errors.email == null ? '🙂' : errors.email;
  const passwordCheck = errors.password == null ? '🙂' : errors.password;

  return (
    <Wrapper>
      <ToastContainer />
      <Desc>
        <TitleDesc>
          <div>
            우리 모두 모여요
          </div>
          <div>
            🤣
          </div>
        </TitleDesc>
        <TitleImage src={imageUrl}/>
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
      <LoginButtonGoogle/>
      <LoginButtonNaver/>
      <LoginButtonKakao/>
      <FindSection>
        <AdditionalMsg>이메일 찾기</AdditionalMsg>
        <AdditionalMsg>비밀번호 찾기</AdditionalMsg>
      </FindSection>
      <SignupSection>
        <AdditionalMsg>아직도 동네#람들 회원이 아니신가요?</AdditionalMsg>
        <SignupNavigation onClick={() => navigate('/signup')}>
          회원가입
        </SignupNavigation>
      </SignupSection>
    </Wrapper>
  );
}

export default SignIn;
