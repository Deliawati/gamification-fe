import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { getCookie, deleteCookie } from 'cookies-next';
import { BASE_API_URL } from '../lib/constants';
import LocalStorage from '../lib/LocalStorage';

let store;
export const injectStoreToApiClient = (_store) => {
  store = _store;
};

const ApiClient = () => {
  const defaultOptions = {
    baseURL: BASE_API_URL,
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    // const session = await getSession();
    // if (session?.jwt) {
    //   request.headers.Authorization = `Bearer ${session.jwt}`;
    // }
    // const accessToken = LocalStorage.get('access_token');
    const { token, appKey } = store.getState().authentication;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
      request.headers['App-Key'] = appKey;
    }
    request.headers.Accept = 'application/json';
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        LocalStorage.remove('access_token');
        // window.location.href = '/initialize';
      }
      if (error?.response?.status === 403) {
        window.location.href = '/404';
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default ApiClient;
