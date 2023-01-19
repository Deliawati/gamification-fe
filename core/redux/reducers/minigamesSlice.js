import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MinigamesServices from '../../services/MinigamesServices';

const initialState = {
  dataMinigames: null,
  errorMinigames: null,
  loadingMinigames: false,

  dataTokenMinigame: null,
  errorTokenMinigame: null,
  loadingTokenMinigame: false,

  dataPuzzleNumber: null,
  errorPuzzleNumber: null,
  loadingPuzzleNumber: false,
};

export const asyncMinigames = createAsyncThunk(
  'minimage/minigames',
  async () => {
    const { data } = await MinigamesServices.minigames();
    return {
      data,
    };
  },
);
export const asyncTokenMinigame = createAsyncThunk(
  'minimage/minigame/token',
  async () => {
    const { data } = await MinigamesServices.tokenMinigame();
    return {
      data,
    };
  },
);

export const asyncPuzzleNumber = createAsyncThunk(
  'minimage/minigame/puzzlenumber',
  async ({ id }) => {
    const { data } = await MinigamesServices.puzzleNumber({ id });
    return {
      data,
    };
  },
);

const minigamesSlice = createSlice({
  name: 'minigames',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    // LIST Minigames
    addCase(asyncMinigames.pending, (state) => {
      state.loadingMinigames = true;
    });
    addCase(asyncMinigames.fulfilled, (state, { payload }) => {
      state.dataMinigames = payload.data;
      state.loadingMinigames = false;
    });
    addCase(asyncMinigames.rejected, (state, { error }) => {
      state.errorMinigames = error;
      state.loadingMinigames = false;
    });
    // MINIGAME TOKEN
    addCase(asyncTokenMinigame.pending, (state) => {
      state.loadingTokenMinigame = true;
    });
    addCase(asyncTokenMinigame.fulfilled, (state, { payload }) => {
      state.dataTokenMinigame = payload.data;
      state.loadingTokenMinigame = false;
    });
    addCase(asyncTokenMinigame.rejected, (state, { error }) => {
      state.errorTokenMinigame = error;
      state.loadingTokenMinigame = false;
    });
    // PUZZLE NUMBER
    addCase(asyncPuzzleNumber.pending, (state) => {
      state.loadingPuzzleNumber = true;
    });
    addCase(asyncPuzzleNumber.fulfilled, (state, { payload }) => {
      state.dataPuzzleNumber = payload.data;
      state.loadingPuzzleNumber = false;
    });
    addCase(asyncPuzzleNumber.rejected, (state, { error }) => {
      state.errorPuzzleNumber = error;
      state.loadingPuzzleNumber = false;
    });
  },
});

export const minigamesState = (state) => state.minigames;

const minigamesReducer = minigamesSlice.reducer;

export default minigamesReducer;
