import apiService from './apiService';

const AchivementServices = {
  achivements: async () => {
    const { data: { data } } = await apiService.get('/achivement');
    return { data };
  },
  syncAchivement: async () => {
    const { data: { data, status, message } } = await apiService.get('/sync/achivement');
    return { data, status, message };
  },
};

export default AchivementServices;
