import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_API_URL } from '../lib/constants';

const ApiPublic = () => {
  const defaultOptions = {
    baseURL: BASE_API_URL,
  };

  const instancePublic = axios.create(defaultOptions);

  instancePublic.interceptors.request.use(async (request) => {
    request.headers.Accept = 'application/json';
    return request;
  });

  instancePublic.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.data.data.length > 0) {
        error.response.data.data.map((item) => toast.error(item.password[0]));
        // error.response.data.data.map((item) => toast.error(item.otp[0]));
      } else {
        toast.error(error.response.data.message);
      }
      // console.log(error.response.data.data);
      Promise.reject(error);
    },
  );

  return instancePublic;
};
export default ApiPublic;
