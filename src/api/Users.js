import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API =
  'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

/**
 * 회원가입 API
 * @param {{nickname: string, email: string, password: string, gender: string, year: number, month: number, day: number}} userForm
 * @returns {} email, message
 */
export async function signUpAPI(userForm) {
  return API.post(`${BASE_API}/auth/signup`, userForm);
}

/**
 * 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function signInAPI(userForm) {
  return API.post(`${BASE_API}/auth/login`, userForm);
}

/**
 * 구글 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function signInOAuthGoogleAPI() {
  return API.post(`${BASE_API}/oauth2/authorization/google`);
}

/**
 * 로그아웃 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function logOutAPI() {
  return API.get(`${BASE_API}/auth/logout`);
}

/**
 * 내 정보 목록 조회 API
 * @param { string } accessToken
 * @return {} email, nickname, cash, birth, message
 */
export async function myPageAPI(id) {
  return API.get(`${BASE_API}/members/${id}`);
}

/**
 * 내 정보 상세 목록 조회 API
 * @param { string } accessToken
 * @return {} email, nickname, cash, birth, message
 */
export async function myPageDetailAPI() {
  return API.get(`${BASE_API}/members/`);
}

/**
 * 비밀번호 변경 API
 * @param { password: string } passwordForm
 * @return {} message
 */
export async function newPasswordAPI(passwordForm) {
  return API.patch(`${BASE_API}/members/password`, passwordForm);
}

/**
 * 자기소개 변경 API
 * @param { nickname: string, introduce: string  }
 * @return {} message
 */
export async function newIntroduceAPI(contentsForm) {
  return API.patch(`${BASE_API}/members/info`, contentsForm);
}

/**
 * 회원 탈퇴 API
 * @return {} message
 */
export async function signOutAPI() {
  return API.delete(`${BASE_API}/members`);
}

/**
 * 팔로우 랭킹 조회 API
 * @param { query, query, string } page, size, accessToken
 * @return {} pageNumber, follows, nickName, followCount
 */
export async function rankAPI(listPage, contentSize) {
  return API.get(`${BASE_API}/follows`, {params: {page: {listPage}, size:{contentSize}}});
}