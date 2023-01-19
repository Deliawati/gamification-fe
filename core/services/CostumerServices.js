import apiService from './apiService';

const CostumerServices = {
  category: async () => {
    const { data: { data } } = await apiService.get('/reward/costumer/category');
    return { data };
  },
  rewardCostumers: async (filter) => {
    const params = {};
    if (filter?.category_id) {
      params.category_id = filter.category_id;
    }
    const { data: { data } } = await apiService.get('/reward/costumer/list', { params });
    return { data };
  },
  rewardCostumer: async (voucherId) => {
    const { data: { data } } = await apiService.get(`reward/costumer/detail?voucher_id=${voucherId}`);
    return { data };
  },
  rewardCostumersNew: async () => {
    const { data: { data } } = await apiService.get('/reward/costumer/new');
    return { data };
  },
  rewardCostumersExpired: async () => {
    const { data: { data } } = await apiService.get('/reward/costumer/expired');
    return { data };
  },
  rewardRedeem: async ({ voucherId, redeemKey }) => {
    const { data: { data, status } } = await apiService.post('reward/costumer/redeem', { voucher_id: voucherId, redeem_key: redeemKey });
    return { data, status };
  },
  rewardGetKey: async ({ trx_id, redeem_key }) => {
    const { data: { data, status } } = await apiService.get('reward/costumer/key', { params: { trx_id, redeem_key } });
    return { data, status };
  },
};

export default CostumerServices;
