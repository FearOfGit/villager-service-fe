import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

/**
 * 회원가입 API
 * @param {{nickname: string, email: string, password: string, gender: string, year: number, month: number, day: number}} userForm
 * @returns {} email, message
 */

export async function signUpAPI (userForm){
  return API.post(`${BASE_API}/auth/signup`, userForm);
}

/**
 * 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */

export async function signInAPI (userForm){
  return API.post(`${BASE_API}/auth/login`, userForm);
}

/**
 * 내 정보 목록 API
 * @param { string } accessToken
 * @return {} email, nickname, cash, birth, message
 */
export async function myPageAPI (){
  return API.get(`${BASE_API}/members`);
}

/**
 * 비밀번호 변경 API
 * @param { password: string } passwordForm
 * @return {} message
 */
export async function newPasswordAPI (){
  return API.patch(`${BASE_API}/members/password`);
}

