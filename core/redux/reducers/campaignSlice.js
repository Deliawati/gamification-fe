import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CampaignServices from '../../services/CampaignServices';

const initialState = {
  dataCampaigns: null,
  errorCampaigns: null,
  loadingCampaigns: false,

  dataCheckEnroll: null,
  errorCheckEnroll: null,
  loadingCheckEnroll: false,

  dataEnroll: null,
  errorEnroll: null,
  loadingEnroll: false,

  dataChallenge: null,
  errorChallenge: null,
  loadingChallenge: false,

  dataSyncChallenge: null,
  errorSyncChallenge: null,
  loadingSyncChallenge: false,
};

export const asyncCampaigns = createAsyncThunk(
  'campaign/campaigns',
  async () => {
    const { data } = await CampaignServices.campaigns();
    return {
      data,
    };
  },
);

export const asyncCheckEnroll = createAsyncThunk(
  'campaign/enroll/check',
  async (id) => {
    const { data, status, message } = await CampaignServices.checkEnroll(id);
    return { data, status, message };
  },
);

export const asyncEnroll = createAsyncThunk(
  'campaign/enroll',
  async (id) => {
    const { data, status, message } = await CampaignServices.enroll(id);
    return { data, status, message };
  },
);
export const asyncChallenge = createAsyncThunk(
  'campaign/challenge',
  async (id) => {
    const { data, status, message } = await CampaignServices.challenge(id);
    return { data, status, message };
  },
);
export const asyncSyncChallenge = createAsyncThunk(
  'campaign/challenge/sync',
  async (id) => {
    const { data, status, message } = await CampaignServices.syncChallenge(id);
    return { data, status, message };
  },
);
const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // LIST CAMPAIGNS
    addCase(asyncCampaigns.pending, (state) => {
      state.loadingCampaigns = true;
    });
    addCase(asyncCampaigns.fulfilled, (state, { payload }) => {
      state.dataCampaigns = payload.data;
      state.loadingCampaigns = false;
    });
    addCase(asyncCampaigns.rejected, (state, { error }) => {
      state.errorCampaigns = error;
      state.loadingCampaigns = false;
    });
    // CHECK ENROLL
    addCase(asyncCheckEnroll.pending, (state) => {
      state.loadingCheckEnroll = true;
    });
    addCase(asyncCheckEnroll.fulfilled, (state, { payload }) => {
      state.dataCheckEnroll = payload.status;
      state.loadingCheckEnroll = false;
    });
    addCase(asyncCheckEnroll.rejected, (state, { error }) => {
      state.errorCheckEnroll = error;
      state.loadingCheckEnroll = false;
    });
    // CHALLENGE
    addCase(asyncChallenge.pending, (state) => {
      state.loadingChallenge = true;
    });
    addCase(asyncChallenge.fulfilled, (state, { payload }) => {
      state.dataChallenge = payload.data;
      state.loadingChallenge = false;
    });
    addCase(asyncChallenge.rejected, (state, { error }) => {
      state.errorChallenge = error;
      state.loadingChallenge = false;
    });
    // SyncChallenge
    addCase(asyncSyncChallenge.pending, (state) => {
      state.loadingSyncChallenge = true;
    });
    addCase(asyncSyncChallenge.fulfilled, (state, { payload }) => {
      state.dataSyncChallenge = payload.data;
      state.loadingSyncChallenge = false;
    });
    addCase(asyncSyncChallenge.rejected, (state, { error }) => {
      state.errorSyncChallenge = error;
      state.loadingSyncChallenge = false;
    });
  },
});

export const campaignState = (state) => state.campaign;

const campaignReducer = campaignSlice.reducer;

export default campaignReducer;
