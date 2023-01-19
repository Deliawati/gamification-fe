import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AchivementServices from '../../services/AchivementServices';

const initialState = {
  dataAchivements: null,
  errorAchivements: null,
  loadingAchivements: false,

  dataSyncAchivement: null,
  errorSyncAchivement: null,
  loadingSyncAchivement: false,
};

export const asyncAchivements = createAsyncThunk(
  'achivement/achivements',
  async () => {
    const { data } = await AchivementServices.achivements();
    return {
      data,
    };
  },
);

export const asyncSyncAchivement = createAsyncThunk(
  'achivement/sync',
  async (id) => {
    const { data, status, message } = await AchivementServices.syncAchivement(id);
    return { data, status, message };
  },
);
const achivementSlice = createSlice({
  name: 'achivement',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // LIST ACHIVEMENT
    addCase(asyncAchivements.pending, (state) => {
      state.loadingAchivements = true;
    });
    addCase(asyncAchivements.fulfilled, (state, { payload }) => {
      state.dataAchivements = payload.data;
      state.loadingAchivements = false;
    });
    addCase(asyncAchivements.rejected, (state, { error }) => {
      state.errorAchivements = error;
      state.loadingAchivements = false;
    });
    // CHECK ENROLL
    addCase(asyncSyncAchivement.pending, (state) => {
      state.loadingSyncAchivement = true;
    });
    addCase(asyncSyncAchivement.fulfilled, (state, { payload }) => {
      state.dataSyncAchivement = payload.data;
      state.loadingSyncAchivement = false;
    });
    addCase(asyncSyncAchivement.rejected, (state, { error }) => {
      state.errorSyncAchivement = error;
      state.loadingSyncAchivement = false;
    });
  },
});

export const achivementState = (state) => state.achivement;

const achivementReducer = achivementSlice.reducer;

export default achivementReducer;
