import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LuckyspinServices from '../../services/LuckyspinServices';

const initialState = {
  luckyspins: null,
  luckyspin: null,
  luckyspinToken: null,
  luckyspinStatus: false,
  statusLuckyspin: false,

  dataLuckyspins: null,
  errorLuckyspins: null,
  loadingLuckyspins: false,

  dataLuckyspin: null,
  errorLuckyspin: null,
  loadingLuckyspin: false,

  dataTokenLuckyspin: null,
  errorTokenLuckyspin: null,
  loadingTokenLuckyspin: false,

  dataExchangeLuckyspin: null,
  errorExchangeLuckyspin: null,
  loadingExchangeLuckyspin: false,

  dataStatusLuckyspin: null,
  errorStatusLuckyspin: null,
  loadingStatusLuckyspin: false,
};

export const asyncLuckyspins = createAsyncThunk(
  'luckyspin/luckyspins',
  async () => {
    const { data } = await LuckyspinServices.luckyspins();
    return {
      data,
    };
  },
);
export const asyncLuckyspin = createAsyncThunk(
  'luckyspin/luckyspin',
  async ({ id }) => {
    const { data } = await LuckyspinServices.luckyspin({ id });
    return {
      data,
    };
  },
);
export const asyncTokenLuckyspin = createAsyncThunk(
  'luckyspin/tokenluckyspin',
  async () => {
    const { data } = await LuckyspinServices.tokenLuckyspin();
    return {
      data,
    };
  },
);
export const asyncExchangeLuckyspin = createAsyncThunk(
  'luckyspin/exchangeluckyspin',
  async ({ id, reward_id }) => {
    const { status } = await LuckyspinServices.exchangeLuckyspin({ id, reward_id });
    return {
      status,
    };
  },
);
export const asyncStatusLuckyspin = createAsyncThunk(
  'luckyspin/statusluckyspin',
  async ({ id }) => {
    const { status } = await LuckyspinServices.statusLuckyspin({ id });
    return {
      status,
    };
  },
);

const luckyspinSlice = createSlice({
  name: 'luckyspin',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // LIST LUCKYSPINS
    addCase(asyncLuckyspins.pending, (state) => {
      state.loadingLuckyspins = true;
    });
    addCase(asyncLuckyspins.fulfilled, (state, { payload }) => {
      state.luckyspins = payload.data;
      state.loadingLuckyspins = false;
      state.dataLuckyspins = payload;
    });
    addCase(asyncLuckyspins.rejected, (state, { error }) => {
      state.loadingLuckyspins = false;
      state.errorLuckyspins = error;
    });
    // DETAIL LUCKYSPINS
    addCase(asyncLuckyspin.pending, (state) => {
      state.loadingLuckyspin = true;
    });
    addCase(asyncLuckyspin.fulfilled, (state, { payload }) => {
      state.luckyspin = payload.data;
      state.loadingLuckyspin = false;
      state.dataLuckyspin = payload;
    });
    addCase(asyncLuckyspin.rejected, (state, { error }) => {
      state.loadingLuckyspin = false;
      state.errorLuckyspin = error;
    });
    // TOKEN LUCKYSPINS
    addCase(asyncTokenLuckyspin.pending, (state) => {
      state.loadingTokenLuckyspin = true;
    });
    addCase(asyncTokenLuckyspin.fulfilled, (state, { payload }) => {
      state.luckyspinToken = payload.data;
      state.loadingTokenLuckyspin = false;
      state.dataTokenLuckyspin = payload;
    });
    addCase(asyncTokenLuckyspin.rejected, (state, { error }) => {
      state.loadingTokenLuckyspin = false;
      state.errorTokenLuckyspin = error;
    });
    // EXCHANGE LUCKYSPINS
    addCase(asyncExchangeLuckyspin.pending, (state) => {
      state.loadingExchangeLuckyspin = true;
    });
    addCase(asyncExchangeLuckyspin.fulfilled, (state, { payload }) => {
      state.loadingExchangeLuckyspin = false;
      state.dataExchangeLuckyspin = payload;
    });
    addCase(asyncExchangeLuckyspin.rejected, (state, { error }) => {
      state.loadingExchangeLuckyspin = false;
      state.errorLuckyspin = error;
    });
    // STATUS LUCKYSPINS
    addCase(asyncStatusLuckyspin.pending, (state) => {
      state.loadingStatusLuckyspin = true;
      state.statusLuckyspin = false;
    });
    addCase(asyncStatusLuckyspin.fulfilled, (state, { payload }) => {
      state.luckyspinStatus = payload;
      state.loadingStatusLuckyspin = false;
      state.dataStatusLuckyspin = payload;
    });
    addCase(asyncStatusLuckyspin.rejected, (state, { error }) => {
      state.loadingStatusLuckyspin = false;
      state.errorStatusLuckyspin = error;
      state.statusLuckyspin = false;
    });
  },
});

export const luckyspinState = (state) => state.luckyspin;

const luckyspinReducer = luckyspinSlice.reducer;

export default luckyspinReducer;
