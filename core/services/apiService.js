import axios from 'axios';
import resolveResponseMessage from './resolveResponseMessage';

let store;

export const injectStore = (_store) => {
  store = _store;
};

const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiService.interceptors.request.use(
  (config) => {
    const { token, appKey } = store.getState().authentication;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['App-Key'] = appKey;
      // config.headers['App-Key'] = process.env.NEXT_PUBLIC_APP_KEY;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiService.interceptors.response.use(
  (response) => {
    if (response.data.message) {
      response.data.message = resolveResponseMessage(response.data.message);
    }
    return response;
  },
  (error) => {
    console.log(error, 'error');
    if (error.response.status === 401) {
      store.dispatch({ type: 'authentication/logout' });
    }

    if (error?.response?.data) {
      const resolveError = error.response.data;
      resolveError.code = error.response.status;
      if (resolveError.message) {
        resolveError.message = resolveResponseMessage(resolveError.message);
      }
      if (resolveError.errors) {
        const errors = {};
        Object.keys(resolveError.errors).forEach((key) => {
          errors[key] = resolveResponseMessage(resolveError.errors[key][0]);
        });
        resolveError.errors = errors;
      }
      return Promise.reject(resolveError);
    }

    return Promise.reject(error);
  },
);

export default apiService;
