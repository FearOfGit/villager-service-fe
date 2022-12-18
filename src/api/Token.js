import axios from 'axios';
import { setAccessToken, getAccessToken, setRefreshToken } from '../app/index';

export const API = axios.create({});

API.interceptors.request.use((res) => {
  const accessToken = getAccessToken();

  if (accessToken) {
    res.headers['Content-Type'] = 'application/json;charset=UTF-8';
    res.headers.Authorization = `Bearer ${accessToken}`;
  }
  return res;
});
const BASE_API =
  'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 400) {
      try {
        const originalRequest = error.config;
        const data = await API.get(`${BASE_API}/auth/refresh`);
        if (data) {
          const { accessToken, refreshToken } = data.data;
          localStorage.removeItem('access_token');
          setAccessToken(accessToken);
          setRefreshToken(refreshToken);
          originalRequest.headers.Authorization = accessToken;
          return await API.request(originalRequest);
        }
      } catch (err) {
        localStorage.removeItem('access_token');
        console.log(err);
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);
