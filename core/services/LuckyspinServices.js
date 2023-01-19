import apiService from './apiService';

const LuckyspinServices = {
  luckyspins: async () => {
    const { data: { data } } = await apiService.get('luckyspin/list');
    return { data };
  },
  luckyspin: async ({ id }) => {
    const { data: { data } } = await apiService.get(`luckyspin/show/${id}`);
    return { data };
  },
  tokenLuckyspin: async () => {
    const { data: { data } } = await apiService.get('luckyspin/data');
    return { data };
  },
  statusLuckyspin: async ({ id }) => {
    const { data: { status } } = await apiService.get(`luckyspin/${id}/check/token`);
    return { status };
  },
  exchangeLuckyspin: async ({ id, reward_id }) => {
    const formData = new FormData();
    formData.append('reward_id', reward_id);
    const { data: { status } } = await apiService.post(`/luckyspin/${id}/exchange/reward`, formData);
    return { status };
  },
};

export default LuckyspinServices;
