import React from "react";
import { ReactComponent as KakaoLogo } from '../../../images/kakaologin.svg';
import { ReactComponent as GoogleLogo } from '../../../images/googlelogin.svg';
import { ReactComponent as NaverLogo } from '../../../images/naverlogin.svg';
import { Link, ButtonKakao, ButtonNaver, ButtonGoogle, GoogleLogoBox, TextBox } from "./Button.styles";

const REDIRECT_URI = 'https://kimnerd625.github.io';
// const REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';
const authGoogle = `https://devwinter.com/oauth2/authorization/google?redirect_uri=${REDIRECT_URI}`;
const authNaver = `https://devwinter.com/oauth2/authorization/naver?redirect_uri=${REDIRECT_URI}`;
const authKakao = `https://devwinter.com/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

function LoginButtonGoogle () {
  return(
    <Link href={authGoogle} rel="noopener noreferrer">
      <ButtonGoogle>
        <GoogleLogoBox>
          <GoogleLogo />
        </GoogleLogoBox>
        <TextBox>Google 계정으로 로그인</TextBox>
      </ButtonGoogle>
    </Link>
  );
}

function LoginButtonNaver () {
  return(
    <Link href={authNaver} rel="noopener noreferrer">
      <ButtonNaver>
        <NaverLogo />
        <TextBox>네이버 로그인</TextBox>
      </ButtonNaver>
    </Link>
  );
}
function LoginButtonKakao () {
  return(
    <Link href={authKakao} rel="noopener noreferrer">
      <ButtonKakao>
        <KakaoLogo />
        <TextBox>카카오로 시작하기</TextBox>
      </ButtonKakao>
    </Link>
  );
}

export {LoginButtonGoogle, LoginButtonKakao, LoginButtonNaver};
