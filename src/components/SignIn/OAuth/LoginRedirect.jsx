import React, { useEffect, useState} from 'react';
import {  useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRefreshToken, setAccessToken, setAuthentication } from '../../../app';
import { setUserId } from '../../../store/User';
import { Wrapper } from '../SignIn.styles';

function LoginRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  
  console.log(searchParams.get('accessToken'));
  console.log(searchParams.get('refreshToken'));
  console.log(searchParams.get('grantType'));
  console.log(searchParams.get('loginMemberId'));
  console.log(searchParams.get('accessTokenExpirationTime'));

  const accessToken = searchParams.get("accessToken");
  const refreshToken = searchParams.get("refreshToken");
  const loginMemberId = searchParams.get("loginMemberId");

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  setAuthentication(true);
  dispatch(setUserId(loginMemberId));

  useEffect(()=> {
    setTimeout(()=> {
      navigate("/map")
    }, 0)
  }, [])

  const handleClick = () => {
    navigate("/map");
  } 

  return (
    <>
      <Wrapper>
        <button type="button" onClick={handleClick}>
          로그인 성공
        </button>
      </Wrapper>
    </>
  );
}

export default LoginRedirect;