/* eslint-disable prefer-const */
import axios from 'axios';
import moment from 'moment';
import {
  setAccessToken,
  getAccessToken,
  setRefreshToken,
  getRefreshToken,
} from '../app/index';

const BASE_API =
  'http://ec2-15-164-233-107.ap-northeast-2.compute.amazonaws.com:8080/api/v1';

export const API = axios.create({});

API.interceptors.request.use(async (res) => {
  let accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const expireAt = localStorage.getItem('expiresAt');

  if (refreshToken && moment(expireAt).diff(moment()) < 0) {
    const { data } = await axios.post(
      `${BASE_API}/auth/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'refresh-token': refreshToken,
        },
      },
    );
    accessToken = data.accessToken;
    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    localStorage.setItem(
      'expiresAt',
      moment().add(8, 'minutes').format('yyyy-MM-DD HH:mm:ss'),
    );
  }

  if (accessToken) {
    res.headers.Authorization = `Bearer ${accessToken}`;
    if (res.data instanceof FormData) {
      res.headers['Content-Type'] = 'multipart/form-data';
    } else {
      res.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
  }
  return res;
});
