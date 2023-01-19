import ApiClient from '../services/ApiClient';

const initialState = {
  points: {
    data: null,
    status: 'idle',
    error: null,
  },
  ladderboards: {
    data: null,
    status: 'idle',
    error: null,
  },
};

export const POINTS_DATA = 'POINTS';
export const POINTS_ERROR = 'POINTS_ERROR';
export const POINTS_STATUS = 'POINTS_STATUS';
export const LADDERBOARDS_DATA = 'LADDERBOARDS';
export const LADDERBOARDS_ERROR = 'LADDERBOARDS_ERROR';
export const LADDERBOARDS_STATUS = 'LADDERBOARDS_STATUS';

export default function pointReducer(state = initialState, action = 'state') {
  switch (action.type) {
    case POINTS_DATA:
      return { ...state, points: { ...state.points, data: action.payload } };
    case POINTS_ERROR:
      return { ...state, points: { ...state.points, error: action.payload } };
    case POINTS_STATUS:
      return { ...state, points: { ...state.points, status: action.payload } };
    case LADDERBOARDS_DATA:
      return { ...state, ladderboards: { ...state.ladderboards, data: action.payload } };
    case LADDERBOARDS_ERROR:
      return { ...state, ladderboards: { ...state.ladderboards, error: action.payload } };
    case LADDERBOARDS_STATUS:
      return { ...state, ladderboards: { ...state.ladderboards, status: action.payload } };
    default:
      return state;
  }
}
export function fetchPoints() {
  return async (dispatch) => {
    try {
      dispatch({
        type: POINTS_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/point');
      if (response.status === 200) {
        dispatch({
          type: POINTS_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: POINTS_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: POINTS_STATUS,
        payload: 'idle',
      });
    }
  };
}
export function fetchLadderboards() {
  return async (dispatch) => {
    try {
      dispatch({
        type: LADDERBOARDS_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/point/ladderboard');
      if (response.status === 200) {
        dispatch({
          type: LADDERBOARDS_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: LADDERBOARDS_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: LADDERBOARDS_STATUS,
        payload: 'idle',
      });
    }
  };
}
