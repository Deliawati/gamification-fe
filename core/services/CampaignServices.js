import apiService from './apiService';

const CostumerServices = {
  campaigns: async () => {
    const { data: { data } } = await apiService.get('/campaign');
    return { data };
  },
  checkEnroll: async (id) => {
    const { data: { data, status, message } } = await apiService.get(`/campaign/check/${id}`);
    return { data, status, message };
  },
  enroll: async (id) => {
    const { data: { data, status, message } } = await apiService.post(`/campaign/enroll/${id}`);
    return { data, status, message };
  },
  syncChallenge: async (id) => {
    const { data: { data, status, message } } = await apiService.get('/sync/challenge', { params: { campaign_id: id } });
    return { data, status, message };
  },
  challenge: async (id) => {
    const { data: { data, status, message } } = await apiService.get(`/challenge/${id}`);
    return { data, status, message };
  },
};

export default CostumerServices;
