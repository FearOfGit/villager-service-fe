import { API } from './Token';

// PROXY 설정
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/
const BASE_API = 'https://devwinter.com/api/v1';

/**
 * 회원가입 API
 * @param {{nickname: string, email: string, password: string, gender: string, year: number, month: number, day: number}} userForm
 * @returns {} email, message
 */
export async function signUpAPI(userForm) {
  return API.post(`${PROXY}/auth/signup`, userForm);
}

/**
 * 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function signInAPI(userForm) {
  return API.post(`${PROXY}/auth/login`, userForm);
}

/**
 * 구글 로그인 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function signInOAuthGoogleAPI() {
  return API.post(`${PROXY}/oauth2/authorization/google`);
}

/**
 * 로그아웃 API
 * @param {{email: string, password: string}} userForm
 * @returns {} accessToken, grantType, refreshToken, accessTokenExpirationTime, message
 */
export async function logOutAPI() {
  return API.get(`${PROXY}/auth/logout`);
}

/**
 * 내 정보 목록 조회 API
 * @param { string } accessToken
 * @return {} email, nickname, cash, birth, message
 */
export async function myPageAPI(id) {
  return API.get(`${PROXY}/members/${id}`);
}

/**
 * 내 정보 상세 목록 조회 API
 * @param { string } accessToken
 * @return {} email, nickname, cash, birth, message
 */
export async function myPageDetailAPI() {
  return API.get(`${PROXY}/members/`);
}

/**
 * 비밀번호 변경 API
 * @param { password: string } passwordForm
 * @return {} message
 */
export async function newPasswordAPI(passwordForm) {
  return API.patch(`${PROXY}/members/password`, passwordForm);
}

/**
 * 자기소개 변경 API
 * @param { nickname: string, introduce: string  }
 * @return {} message
 */
export async function newIntroduceAPI(contentsForm) {
  return API.patch(`${PROXY}/members/info`, contentsForm);
}

/**
 * 회원 탈퇴 API
 * @return {} message
 */
export async function signOutAPI() {
  return API.delete(`${PROXY}/members`);
}

/**
 * 관심태그 업데이트 API
 * @return {} message
 */
export async function updateTagAPI(body) {
  return API.post(`${PROXY}/members/tags`, body);
}

/**
 * 팔로우 랭킹 조회 API
 * @param { query, query, string } page, size, accessToken
 * @return {} pageNumber, follows, nickName, followCount
 */
export async function rankAPI(params) {
  return API.get(`${PROXY}/follows`, params);
}
