import ApiClient from '../services/ApiClient';

const initialState = {
  history: {
    data: null,
    status: 'idle',
    error: null,
  },
};

export const HISTORY_DATA = 'HISTORY';
export const HISTORY_ERROR = 'HISTORY_ERROR';
export const HISTORY_STATUS = 'HISTORY_STATUS';

export default function transactionReducer(state = initialState, action = 'state') {
  switch (action.type) {
    case HISTORY_DATA:
      return { ...state, history: { ...state.history, data: action.payload } };
    case HISTORY_ERROR:
      return { ...state, history: { ...state.history, error: action.payload } };
    case HISTORY_STATUS:
      return { ...state, history: { ...state.history, status: action.payload } };
    default:
      return state;
  }
}
export function fetchHistory() {
  return async (dispatch) => {
    try {
      dispatch({
        type: HISTORY_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/transaction/history');
      if (response.status === 200) {
        dispatch({
          type: HISTORY_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: HISTORY_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: HISTORY_STATUS,
        payload: 'idle',
      });
    }
  };
}
