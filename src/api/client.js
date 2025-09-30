// src/api/client.js
import axios from 'axios';

let accessToken = null;
let onLogout = () => {};

export function setAccessToken(token) {
  accessToken = token;
}

export function setLogoutHandler(fn) {
  onLogout = fn;
}

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data?.refresh
    ) {
      originalRequest._retry = true;
      try {
        const res = await axios.post('/api/auth/refresh', {}, { withCredentials: true });
        if (res.data.token) {
          setAccessToken(res.data.token);
          originalRequest.headers.Authorization = `Bearer ${res.data.token}`;
          return api(originalRequest);
        }
      } catch {
        onLogout();
      }
    } else if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      onLogout();
    }
    return Promise.reject(error);
  }
);

export default api;
