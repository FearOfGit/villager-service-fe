import React from "react";
import { ReactComponent as KakaoLogo } from '../../../images/kakaologin.svg';
import { ReactComponent as GoogleLogo } from '../../../images/googlelogin.svg';
import { ReactComponent as NaverLogo } from '../../../images/naverlogin.svg';
import { Link, ButtonKakao, ButtonNaver, ButtonGoogle, GoogleLogoBox, TextBox } from "./Button.styles";

const authGoogle = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google';
const authNaver = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/naver';
const authKakao = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao';

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
