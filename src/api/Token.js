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
