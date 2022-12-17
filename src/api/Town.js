import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

/**
 * 회원 동네 설정/추가 API
 * @param {{townId: number, townName: string, latitude: number, longitude: number}} townValues
 * @returns {}
 */
export async function insertTownAPI (townValues){
  return API.post(`${BASE_API}/mumbers/towns`, townValues);
}

/**
 * 회원 동네 목록 조회 API
 * @param {string} accessToken
 * @returns {} memberTownId, townName, cityName, createdAt, modifiedAt, main
 */
export async function getTownAPI (townValues){
  return API.get(`${BASE_API}/mumbers/towns`, townValues);
}