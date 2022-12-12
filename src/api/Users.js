import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth';

/**
 * 회원가입 API
 * @param {{nickname: string, email: string, password: string, gender: string, year: number, month: number, day: number}} userForm
 * @returns {} email, message
 */

export async function signUpAPI (userForm){
  return API.post(`${BASE_API}/signup`, userForm);
}

/**
 * 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */

export async function signInAPI (userForm){
  return API.post(`${BASE_API}/login`, userForm);
}

