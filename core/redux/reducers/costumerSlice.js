import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CostumerServices from '../../services/CostumerServices';

const initialState = {
  dataCategory: null,
  errorCategory: null,
  loadingCategory: false,

  dataRewardCostumers: null,
  errorRewardCostumers: null,
  loadingRewardCostumers: false,

  dataRewardCostumer: null,
  errorRewardCostumer: null,
  loadingRewardCostumer: false,

  dataRewardCostumersNew: null,
  errorRewardCostumersNew: null,
  loadingRewardCostumersNew: false,

  dataRewardCostumersExpired: null,
  errorRewardCostumersExpired: null,
  loadingRewardCostumersExpired: false,

  dataRedeem: null,
  errorRedeem: null,
  loadingRedeem: false,

  dataGetKey: null,
  errorGetKey: null,
  loadingGetKey: false,
};

export const asyncCategory = createAsyncThunk(
  'costumer/category',
  async () => {
    const { data } = await CostumerServices.category();
    return {
      data,
    };
  },
);
export const asyncRewardCostumers = createAsyncThunk(
  'costumer/reward',
  async (filter) => {
    const { data } = await CostumerServices.rewardCostumers(filter);
    return {
      data,
    };
  },
);
export const asyncRewardCostumer = createAsyncThunk(
  'costumer/reward/detail',
  async (voucherId) => {
    const { data } = await CostumerServices.rewardCostumer(voucherId);
    return {
      data,
    };
  },
);
export const asyncRewardCostumersNew = createAsyncThunk(
  'costumer/reward/new',
  async () => {
    const { data } = await CostumerServices.rewardCostumersNew();
    return {
      data,
    };
  },
);
export const asyncRewardCostumersExpired = createAsyncThunk(
  'costumer/reward/expired',
  async () => {
    const { data } = await CostumerServices.rewardCostumersExpired();
    return {
      data,
    };
  },
);
export const asyncRedeem = createAsyncThunk(
  'costumer/reward/redeem',
  async ({ voucherId, redeemKey }) => {
    const { data, status } = await CostumerServices.rewardRedeem({ voucherId, redeemKey });
    return { data, status };
  },
);
export const asyncGetKey = createAsyncThunk(
  'costumer/reward/getkey',
  async ({ trx_id, redeem_key }) => {
    const { data, status } = await CostumerServices.rewardGetKey({ trx_id, redeem_key });
    return { data, status };
  },
);
const costumerSlice = createSlice({
  name: 'costumer',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // LIST CATEGORY
    addCase(asyncCategory.pending, (state) => {
      state.loadingCategory = true;
    });
    addCase(asyncCategory.fulfilled, (state, { payload }) => {
      state.dataCategory = payload.data;
      state.loadingCategory = false;
    });
    addCase(asyncCategory.rejected, (state, { error }) => {
      state.errorCategory = error;
      state.loadingCategory = false;
    });
    // LIST REWARD COSTUMER
    addCase(asyncRewardCostumers.pending, (state) => {
      state.loadingRewardCostumers = true;
    });
    addCase(asyncRewardCostumers.fulfilled, (state, { payload }) => {
      state.dataRewardCostumers = payload.data;
      state.loadingRewardCostumers = false;
    });
    addCase(asyncRewardCostumers.rejected, (state, { error }) => {
      state.errorRewardCostumers = error;
      state.loadingRewardCostumers = false;
    });
    // DETAIL REWARD COSTUMER
    addCase(asyncRewardCostumer.pending, (state) => {
      state.loadingRewardCostumer = true;
    });
    addCase(asyncRewardCostumer.fulfilled, (state, { payload }) => {
      state.dataRewardCostumer = payload.data;
      state.loadingRewardCostumer = false;
    });
    addCase(asyncRewardCostumer.rejected, (state, { error }) => {
      state.errorRewardCostumer = error;
      state.loadingRewardCostumer = false;
    });
    // DETAIL REWARD CostumersNew
    addCase(asyncRewardCostumersNew.pending, (state) => {
      state.loadingRewardCostumersNew = true;
    });
    addCase(asyncRewardCostumersNew.fulfilled, (state, { payload }) => {
      state.dataRewardCostumersNew = payload.data;
      state.loadingRewardCostumersNew = false;
    });
    addCase(asyncRewardCostumersNew.rejected, (state, { error }) => {
      state.errorRewardCostumersNew = error;
      state.loadingRewardCostumersNew = false;
    });
    // DETAIL REWARD CostumersNew
    addCase(asyncRedeem.pending, (state) => {
      state.loadingRedeem = true;
    });
    addCase(asyncRedeem.fulfilled, (state, { payload }) => {
      state.dataRedeem = payload.data;
      state.loadingRedeem = false;
    });
    addCase(asyncRedeem.rejected, (state, { error }) => {
      state.errorRedeem = error;
      state.loadingRedeem = false;
    });
    // REWARD EXPIRED
    addCase(asyncRewardCostumersExpired.pending, (state) => {
      state.loadingRewardCostumersExpired = true;
    });
    addCase(asyncRewardCostumersExpired.fulfilled, (state, { payload }) => {
      state.dataRewardCostumersExpired = payload.data;
      state.loadingRewardCostumersExpired = false;
    });
    addCase(asyncRewardCostumersExpired.rejected, (state, { error }) => {
      state.errorRewardCostumersExpired = error;
      state.loadingRewardCostumersExpired = false;
    });
    // DETAIL REWARD GET KEY
    addCase(asyncGetKey.pending, (state) => {
      state.loadingGetKey = true;
    });
    addCase(asyncGetKey.fulfilled, (state, { payload }) => {
      state.dataGetKey = payload;
      state.loadingGetKey = false;
    });
    addCase(asyncGetKey.rejected, (state, { error }) => {
      state.errorGetKey = error;
      state.loadingGetKey = false;
    });
  },
});

export const costumerState = (state) => state.costumer;

const costumerReducer = costumerSlice.reducer;

export default costumerReducer;
