import apiService from './apiService';

const AuthenticationServices = {
  generateToken: async ({
    email, ncli, nd, msisdn, name, image, join_at,
  }) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('ncli', ncli);
    formData.append('nd', nd);
    formData.append('msisdn', msisdn);
    formData.append('name', name);
    formData.append('image', image);
    formData.append('join_at', join_at);
    const { data: { data: { token } } } = await apiService.post('/jwt/encode', formData);
    return { token };
  },
  profile: async () => {
    const { data: { data } } = await apiService.get('/me/profile');
    return { data };
  },
  project: async () => {
    const { data: { data } } = await apiService.get('/project/detail');
    return { data };
  },
  enroll: async () => {
    const { data: { status } } = await apiService.post('/project/enroll');
    return { status };
  },
};

export default AuthenticationServices;
