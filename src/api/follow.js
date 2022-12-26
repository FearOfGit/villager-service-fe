import { API } from './Token';

// // PROXY 설정
// const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/
const BASE_API =
  'https://devwinter.com/api/v1';

/**
 * 팔로우 신청 API
 * @param { followId: string }
 * @returns {} message
 */
export async function followAPI(followId) {
  return API.post(`${BASE_API}/follow/${followId}`);
}

/**
 * 팔로우 취소 API
 * @param { followId: string }
 * @returns {} message
 */
export async function unfollowAPI(unfollowId) {
  return API.post(`${BASE_API}/unfollow/${unfollowId}`);
}
