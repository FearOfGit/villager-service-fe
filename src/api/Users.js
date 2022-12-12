import { API } from './Token';

// 백 엔드 배포 서버 URL: http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/
// 로컬 서버 URL: http://localhost:8080/

const BASE_API = 'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1/auth';

/**
 *
 * @param {{nickname: string, email: string, password: string, gender: string, year: number, month: number, day: number}} userForm
 * @returns {} email, message
 */

export const signUpAPI = async(userForm)=>{
  await API.post(`${BASE_API}/signup`, userForm);
};