export const setAccessToken = (accessToken) => localStorage.setItem('access_token', accessToken);

export const getAccessToken = () => localStorage.getItem('access_token');

export const setAuthentication = (boolean) => sessionStorage.setItem('isAuthenticated', boolean);
