import { API } from './Token';

// // PROXY 설정
// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/
const BASE_API =
  'https://devwinter.com/api/v1';
// const BASE_API =
//   '/api';

/**
 * 동네 설정/추가 API
 * @param {{townId: number, townName: string, latitude: number, longitude: number}} townValues
 * @returns {}
 */
export async function insertTownAPI(townValues) {
  return API.post(`${BASE_API}/members/towns`, townValues);
}

/**
 * 동네 위치로 조회 API
 * @param {{latitude: number, longitude: number}} locValues
 * @returns {} totalCount, towns{townId, name, code, latitude, longitude}
 */
export async function searchTownAPI(locValues) {
  return API.post(`${BASE_API}/towns/location`, locValues);
}

/**
 * 설정한 동네 목록 조회 API
 * @param {string} accessToken
 * @returns {} memberTownId, townName, cityName, createdAt, modifiedAt, main
 */
export async function getTownAPI() {
  console.log('getTown');
  return API.get(`${BASE_API}/members/towns`);
}

/**
 * 회원 동네 별칭 수정 API
 * @param {memberTownId, string} accessToken
 * @returns {}
 */
export async function editTownNameAPI(id, body) {
  return API.patch(`${BASE_API}/members/towns/${id}`, body);
}

/**
 * 회원 동네 삭제 API
 * @param {memberTownId, string} accessToken
 * @returns {}
 */
export async function deleteTownAPI(id) {
  return API.delete(`${BASE_API}/members/towns/${id}`);
}
