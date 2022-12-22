const authGoogle = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
const authNaver = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/naver'
const authKakao = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao'

/* eslint-disable */
const LoginButtonGoogle = () => {
  return(
    <a href={authGoogle} rel="noopener noreferrer">구글 로그인</a>
  );
};
const LoginButtonNaver = () => {
  return(
    <a href={authNaver} rel="noopener noreferrer">네이버 로그인</a>
  );
};
const LoginButtonKakao = () => {
  return(
    <a href={authKakao} rel="noopener noreferrer">카카오 로그인</a>
  );
};
/* eslint-enable */

export default {LoginButtonGoogle, LoginButtonKakao, LoginButtonNaver};
