import apiService from './apiService';

const MinigamesServices = {
  minigames: async () => {
    const { data: { data } } = await apiService.get('/minigames/list');
    return { data };
  },
  puzzleNumber: async ({ id }) => {
    const { data: { data } } = await apiService.get(`/minigames/puzzle-number/show/${id}`);
    return { data };
  },
  tokenMinigame: async () => {
    const { data: { data } } = await apiService.get('minigames/data');
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

export default MinigamesServices;
