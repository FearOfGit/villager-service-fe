import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setHours(today.getHours() + 1);

  return cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};
