export const setAccessToken = (accessToken) => localStorage.setItem('access_token', accessToken);

export const setAuthentication = (boolean) => sessionStorage.setItem('isAuthenticated', boolean);
