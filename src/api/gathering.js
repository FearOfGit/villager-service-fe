import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API =
  'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

/**
 * 모임 등록 API
 * @param {{partName: string, score: number, startDt: string, endDt: string, amount: number, numberPeople: number, location: string, latitude: number, longitude: number, content: string, tagList: [{tagName: string}]}}
 * @returns {} message
 */
export async function gatheringRegisterAPI(body) {
  return API.post(`${BASE_API}/parties`, body);
}

/**
 * 특정 모임 조회 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function gatheringLookUpAPI(id) {
  return API.get(`${BASE_API}/parties/${id}`);
}
