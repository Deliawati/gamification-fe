import ApiClient from '../services/ApiClient';

const initialState = {
  campaigns: {
    data: null,
    status: 'idle',
    error: null,
  },
};

export const CAMPAIGNS_DATA = 'CAMPAIGNS';
export const CAMPAIGNS_ERROR = 'CAMPAIGNS_ERROR';
export const CAMPAIGNS_STATUS = 'CAMPAIGNS_STATUS';

export default function luckyReducer(state = initialState, action = 'state') {
  switch (action.type) {
    case CAMPAIGNS_DATA:
      return { ...state, campaigns: { ...state.campaigns, data: action.payload } };
    case CAMPAIGNS_ERROR:
      return { ...state, campaigns: { ...state.campaigns, error: action.payload } };
    case CAMPAIGNS_STATUS:
      return { ...state, campaigns: { ...state.campaigns, status: action.payload } };
    default:
      return state;
  }
}
export function fetchCampaigns() {
  return async (dispatch) => {
    try {
      dispatch({
        type: CAMPAIGNS_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/campaign');
      if (response.status === 200) {
        dispatch({
          type: CAMPAIGNS_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: CAMPAIGNS_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: CAMPAIGNS_STATUS,
        payload: 'idle',
      });
    }
  };
}
