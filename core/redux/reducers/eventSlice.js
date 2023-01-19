import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ONGOING_EVENT } from '../../globals/constants';
import EventServices from '../../services/EventServices';

const initialState = {
  events: [],

  dataGetEvents: null,
  errorGetEvents: null,
  loadingGetEvents: false,
};

export const asyncGetEvents = createAsyncThunk(
  'events/getEvents',
  async ({
    page = 1, type = ONGOING_EVENT, search = '', page_size = 10,
  }) => {
    const response = await EventServices.getEvents({
      page, type, search, page_size,
    });
    console.log(response, 'response');
    return response;
  },
);

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(asyncGetEvents.pending, (state) => {
      state.loadingGetEvents = true;
    });
    addCase(asyncGetEvents.fulfilled, (state, action) => {
      state.loadingGetEvents = false;
      state.dataGetEvents = action.payload;
    });
    addCase(asyncGetEvents.rejected, (state, action) => {
      state.loadingGetEvents = false;
      state.errorGetEvents = action.payload;
      console.log(action.payload, 'errorGetEvents');
    });
  },
});

export const eventState = (state) => state.events;

const eventReducer = eventSlice.reducer;

export default eventReducer;
