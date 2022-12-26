import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 백 엔드 배포 서버 https URL: https://devwinter.com/api/v1/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API =
  'https://devwinter.com/api/v1';

/**
 * 게시글 목록 조회 API
 * @param {string} categoryId, page, size, AccessToken
 * @returns {} categoryId, title, page, size
 */
export async function postsListAPI(params) {
  return API.get(`${BASE_API}/posts`, params);
}

/**
 * 게시글 작성 API
 * @param {formdata} postForm
 * @returns {}
 */
export async function postAPI(postForm) {
  return API.post(`${BASE_API}/posts`, postForm);
}

/**
 * 게시글 카테고리 조회 API
 * @param {string} AccessToken
 * @returns {} email, message
 */
export async function showCategoryAPI() {
  return API.get(`${BASE_API}/posts/category`);
}

/**
 * 게시글 변경 API
 * @param {string} AccessToken
 * @returns {} categoryId, title, contents
 */
export async function changePostAPI(id, changeForm) {
  return API.put(`${BASE_API}/posts/${id}`, changeForm);
}

/**
 * 게시글 삭제 API
 * @param {string} AccessToken
 * @returns {} categoryId, title, contents
 */
export async function deletePostAPI(id) {
  return API.delete(`${BASE_API}/posts/${id}`);
}

/**
 * 게시글 상세 조회 API
 * @param {string} postId
 * @returns {} categoryId, title, page, size
 */
export async function postDetailAPI(params) {
  return API.get(`${BASE_API}/posts/${params}`);
}
