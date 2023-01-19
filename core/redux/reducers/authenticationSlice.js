import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthenticationServices from '../../services/AuthenticationServices';

const initialState = {
  user: null,
  appKey: null,
  token: null,
  lastLogin: null,
  isAuthenticated: false,
  project: null,
  userType: null,
  userTypeName: null,

  dataToken: null,
  errorToken: null,
  loadingToken: false,

  dataProfile: null,
  errorProfile: null,
  loadingProfile: false,

  dataProject: null,
  errorProject: null,
  loadingProject: false,

  dataEnroll: null,
  errorEnroll: null,
  loadingEnroll: false,
};

export const asyncGenerateToken = createAsyncThunk(
  'authentication/generateToken',
  async ({
    email, ncli, nd, msisdn, name, image, join_at,
  }) => {
    const { token } = await AuthenticationServices
      .generateToken({
        email, ncli, nd, msisdn, name, image, join_at,
      });
    return {
      token,
    };
  },
);
export const asyncProfile = createAsyncThunk(
  'authentication/profile',
  async () => {
    const { data } = await AuthenticationServices
      .profile();
    return {
      data,
    };
  },
);
export const asyncProject = createAsyncThunk(
  'authentication/project',
  async () => {
    const { data } = await AuthenticationServices
      .project();
    return {
      data,
    };
  },
);

export const asyncEnroll = createAsyncThunk(
  'authentication/enroll',
  async () => {
    const { status } = await AuthenticationServices
      .enroll();
    return {
      status,
    };
  },
);

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.dataToken = null;
      state.errorToken = null;
      state.loadingToken = false;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.appKey = null;
      state.token = null;
      state.lastLogin = null;
      state.dataToken = null;
      state.errorToken = null;
    },
    setUser(state, { payload }) {
      state.user = payload;
    },
    setEmbed(state, { payload }) {
      state.appKey = payload.appKey;
      state.token = payload.token;
      state.lastLogin = new Date().toISOString();
      state.isAuthenticated = true;
    },
  },
  extraReducers: ({ addCase }) => {
    // LOGIN
    addCase(asyncGenerateToken.pending, (state) => {
      state.loadingToken = true;
    });
    addCase(asyncGenerateToken.fulfilled, (state, { payload }) => {
      state.loadingToken = false;
      state.dataToken = payload;
      state.token = payload.token;
    });
    addCase(asyncGenerateToken.rejected, (state, { error }) => {
      state.loadingToken = false;
      state.errorToken = error;
    });
    // PROFILE
    addCase(asyncProfile.pending, (state) => {
      state.loadingProfile = true;
    });
    addCase(asyncProfile.fulfilled, (state, { payload }) => {
      state.loadingProfile = false;
      state.dataProfile = payload;
      state.user = payload.data;
    });
    addCase(asyncProfile.rejected, (state, { error }) => {
      state.loadingProfile = false;
      state.errorProfile = error;
    });
    // PROJECT
    addCase(asyncProject.pending, (state) => {
      state.loadingProject = true;
    });
    addCase(asyncProject.fulfilled, (state, { payload }) => {
      state.loadingProject = false;
      state.dataProject = payload;
      state.project = payload.data;
      state.userType = payload.data.user_type;
      state.userTypeName = payload.data.user_type === 1 ? 'costumer' : 'agent';
    });
    addCase(asyncProject.rejected, (state, { error }) => {
      state.loadingProject = false;
      state.errorProject = error;
    });
    // ENROLL
    addCase(asyncEnroll.pending, (state) => {
      state.loadingEnroll = true;
    });
    addCase(asyncEnroll.fulfilled, (state, { payload }) => {
      state.loadingEnroll = false;
      state.dataEnroll = payload.status;
    });
    addCase(asyncEnroll.rejected, (state, { error }) => {
      state.loadingEnroll = false;
      state.errorEnroll = error;
    });
  },
});

export const authenticationState = (state) => state.authentication;

export const getCurrentUser = (state) => authenticationState(state).user;

export const {
  resetLogin,
  logout,
  setUser,
  setEmbed,
} = authenticationSlice.actions;

const authenticationReducer = authenticationSlice.reducer;

export default authenticationReducer;
