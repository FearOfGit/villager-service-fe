const authGoogle = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1'
const authNaver = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1'
const authKakao = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1'

const LoginButtonGoogle = () => {
  return(
    <a href={authGoogle} rel="noopener noreferrer">구글 로그인</a>
  );
};
const LoginButtonNaver = () => {
  return(
    <a href={authNaver} rel="noopener noreferrer">구글 로그인</a>
  );
};
const LoginButtonKakao = () => {
  return(
    <a href={authKakao} rel="noopener noreferrer">구글 로그인</a>
  );
};

