import ApiClient from '../services/ApiClient';

const initialState = {
  profile: {
    data: null,
    status: 'idle',
    error: null,
  },
  activity: {
    data: null,
    status: 'idle',
    error: null,
  },
};

export const PROFILE_DATA = 'PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';
export const PROFILE_STATUS = 'PROFILE_STATUS';
export const ACTIVITY_DATA = 'ACTIVITY';
export const ACTIVITY_ERROR = 'ACTIVITY_ERROR';
export const ACTIVITY_STATUS = 'ACTIVITY_STATUS';

export default function meReducer(state = initialState, action = 'state') {
  switch (action.type) {
    case PROFILE_DATA:
      return { ...state, profile: { ...state.profile, data: action.payload } };
    case PROFILE_ERROR:
      return { ...state, profile: { ...state.profile, error: action.payload } };
    case PROFILE_STATUS:
      return { ...state, profile: { ...state.profile, status: action.payload } };
    case ACTIVITY_DATA:
      return { ...state, activity: { ...state.activity, data: action.payload } };
    case ACTIVITY_ERROR:
      return { ...state, activity: { ...state.activity, error: action.payload } };
    case ACTIVITY_STATUS:
      return { ...state, activity: { ...state.activity, status: action.payload } };
    default:
      return state;
  }
}
export function fetchProfile() {
  return async (dispatch) => {
    try {
      dispatch({
        type: PROFILE_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/me/profile');
      if (response.status === 200) {
        dispatch({
          type: PROFILE_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: PROFILE_STATUS,
        payload: 'idle',
      });
    }
  };
}
export function fetchActivity() {
  return async (dispatch) => {
    try {
      dispatch({
        type: ACTIVITY_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/me/activity');
      if (response.status === 200) {
        dispatch({
          type: ACTIVITY_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: ACTIVITY_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: ACTIVITY_STATUS,
        payload: 'idle',
      });
    }
  };
}
