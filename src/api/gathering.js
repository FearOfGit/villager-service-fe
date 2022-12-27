import { API } from './Token';

// PROXY 설정
// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/
const BASE_API = 'https://devwinter.com/api/v1';
// const BASE_API =
//   '/api';

/**
 * 모임 등록 API
 * @param {{partName: string, score: number, startDt: string, endDt: string, amount: number, numberPeople: number, location: string, : number, longitude: number, content: string, tagList: [{tagName: string}]}}
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

/**
 * 모임 전체 조회 API
 * @param {LAT: string, LNT: string}
 * @returns {} message
 */
export async function AllgatheringLookUpAPI(lat, lnt) {
  return API.get(`${BASE_API}/parties/${lat}/${lnt}`);
}

/**
 * 모임 신청 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function gatheringApplyAPI(id) {
  return API.post(`${BASE_API}/parties/${id}/apply`);
}

/**
 * 모임 좋아요 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function gatheringLikeAPI(id) {
  return API.post(`${BASE_API}/parties/${id}/like`);
}

/**
 * 모임 삭제 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function gatheringDeleteAPI(id) {
  return API.delete(`${BASE_API}/parties/${id}`);
}

/**
 * 모임 신청 조회 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function ApplicationListAPI(id) {
  return API.get(`${BASE_API}/parties/${id}/apply`, {
    page: '1',
    size: '5',
  });
}

/**
 * 모임 댓글 작성 API
 * @param {partyId: string, contents: string}
 * @returns {} message
 */
export async function writeCommentAPI(partyId, body) {
  return API.post(`${BASE_API}/parties/${partyId}/comment`, body);
}

/**
 * 모임 시작 API
 * @param {partyId: string, contents: string}
 * @returns {} message
 */
export async function startGatheringAPI(partyId) {
  return API.post(`${BASE_API}/parties/${partyId}/start`);
}

/**
 * 모임 종료 API
 * @param {partyId: string}
 * @returns {} message
 */
export async function endGatheringAPI(partyId) {
  return API.post(`${BASE_API}/parties/${partyId}/end`);
}

/**
 * 모임 연장 API
 * @param {partyId: string, endDt: string}
 * @returns {} message
 */
export async function extensionGatheringAPI(partyId, endDt) {
  return API.post(`${BASE_API}/parties/${partyId}/extension/${endDt}`);
}

/**
 * 모임 허락 API
 * @param {partyId: string, contents: string}
 * @returns {} message
 */
export async function acceptGatheringAPI(partyId, targetId) {
  return API.patch(`${BASE_API}/parties/${partyId}/permission/${targetId}`);
}

/**
 * 사용자 모임 전체 조회 API
 * @param {}
 * @returns {} message
 */
export async function getUserGatheringAPI() {
  return API.get(`${BASE_API}/parties`);
}
