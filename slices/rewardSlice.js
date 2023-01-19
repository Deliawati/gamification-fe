import ApiClient from '../services/ApiClient';

const initialState = {
  categories: {
    data: null,
    status: 'idle',
    error: null,
  },
  costumer: {
    list: {
      data: null,
      status: 'idle',
      error: null,
    },
    new: {
      data: null,
      status: 'idle',
      error: null,
    },
    expired: {
      data: null,
      status: 'idle',
      error: null,
    },
    detail: {
      data: null,
      status: 'idle',
      error: null,
    },
  },
};

export const CATEGORIES_DATA = 'CATEGORIES';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';
export const CATEGORIES_STATUS = 'CATEGORIES_STATUS';

export const COSTUMER_LIST_DATA = 'COSTUMER_LIST';
export const COSTUMER_LIST_ERROR = 'COSTUMER_LIST_ERROR';
export const COSTUMER_LIST_STATUS = 'COSTUMER_LIST_STATUS';

export const COSTUMER_NEW_DATA = 'COSTUMER_NEW';
export const COSTUMER_NEW_ERROR = 'COSTUMER_NEW_ERROR';
export const COSTUMER_NEW_STATUS = 'COSTUMER_NEW_STATUS';

export const COSTUMER_EXPIRED_DATA = 'COSTUMER_EXPIRED';
export const COSTUMER_EXPIRED_ERROR = 'COSTUMER_EXPIRED_ERROR';
export const COSTUMER_EXPIRED_STATUS = 'COSTUMER_EXPIRED_STATUS';

export const COSTUMER_DETAIL_DATA = 'COSTUMER_DETAIL';
export const COSTUMER_DETAIL_ERROR = 'COSTUMER_DETAIL_ERROR';
export const COSTUMER_DETAIL_STATUS = 'COSTUMER_DETAIL_STATUS';

export default function rewardReducer(state = initialState, action = 'state') {
  switch (action.type) {
    case CATEGORIES_DATA:
      return { ...state, categories: { ...state.categories, data: action.payload } };
    case CATEGORIES_ERROR:
      return { ...state, categories: { ...state.categories, error: action.payload } };
    case CATEGORIES_STATUS:
      return { ...state, categories: { ...state.categories, status: action.payload } };
    case COSTUMER_NEW_DATA:
      return {
        ...state,
        costumer: { ...state.costumer, new: { ...state.costumer.new, data: action.payload } },
      };
    case COSTUMER_NEW_ERROR:
      return {
        ...state,
        costumer: { ...state.costumer, new: { ...state.costumer.new, error: action.payload } },
      };
    case COSTUMER_NEW_STATUS:
      return {
        ...state,
        costumer: { ...state.costumer, new: { ...state.costumer.new, status: action.payload } },
      };
    case COSTUMER_EXPIRED_DATA:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          expired:
            { ...state.costumer.expired, data: action.payload },
        },
      };
    case COSTUMER_EXPIRED_ERROR:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          expired:
            { ...state.costumer.expired, error: action.payload },
        },
      };
    case COSTUMER_EXPIRED_STATUS:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          expired:
            { ...state.costumer.expired, status: action.payload },
        },
      };
    case COSTUMER_LIST_DATA:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          list:
            { ...state.costumer.list, data: action.payload },
        },
      };
    case COSTUMER_LIST_ERROR:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          list:
            { ...state.costumer.list, error: action.payload },
        },
      };
    case COSTUMER_LIST_STATUS:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          list:
            { ...state.costumer.list, status: action.payload },
        },
      };
    case COSTUMER_DETAIL_DATA:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          detail:
            { ...state.costumer.detail, data: action.payload },
        },
      };
    case COSTUMER_DETAIL_ERROR:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          detail:
            { ...state.costumer.detail, error: action.payload },
        },
      };
    case COSTUMER_DETAIL_STATUS:
      return {
        ...state,
        costumer: {
          ...state.costumer,
          detail:
            { ...state.costumer.detail, status: action.payload },
        },
      };
    default:
      return state;
  }
}
export function fetchCategories() {
  return async (dispatch) => {
    try {
      dispatch({
        type: CATEGORIES_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/reward/category');
      if (response.status === 200) {
        dispatch({
          type: CATEGORIES_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: CATEGORIES_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: CATEGORIES_STATUS,
        payload: 'idle',
      });
    }
  };
}
export function fetchCostumerList(filter) {
  const params = {};
  if (filter?.category_id) {
    params.category_id = filter.category_id;
  }
  console.log(filter);
  return async (dispatch) => {
    try {
      dispatch({
        type: COSTUMER_LIST_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/reward/costumer/list', { params });
      if (response.status === 200) {
        dispatch({
          type: COSTUMER_LIST_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: COSTUMER_LIST_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: COSTUMER_LIST_STATUS,
        payload: 'idle',
      });
    }
  };
}

export function fetchCostumerNew() {
  return async (dispatch) => {
    try {
      dispatch({
        type: COSTUMER_NEW_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/reward/costumer/new');
      if (response.status === 200) {
        dispatch({
          type: COSTUMER_NEW_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: COSTUMER_NEW_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: COSTUMER_NEW_STATUS,
        payload: 'idle',
      });
    }
  };
}
export function fetchCostumerExpired() {
  return async (dispatch) => {
    try {
      dispatch({
        type: COSTUMER_EXPIRED_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/reward/costumer/expired');
      if (response.status === 200) {
        dispatch({
          type: COSTUMER_EXPIRED_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: COSTUMER_EXPIRED_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: COSTUMER_EXPIRED_STATUS,
        payload: 'idle',
      });
    }
  };
}
export function fetchCostumerDetail({ voucher_id }) {
  return async (dispatch) => {
    try {
      dispatch({
        type: COSTUMER_DETAIL_STATUS,
        payload: 'loading',
      });
      const response = await ApiClient().get('/reward/costumer/detail', { params: { voucher_id } });
      if (response.status === 200) {
        dispatch({
          type: COSTUMER_DETAIL_DATA,
          payload: response.data.data,
        });
      }
    } catch (error) {
      dispatch({
        type: COSTUMER_DETAIL_ERROR,
        payload: error,
      });
    } finally {
      dispatch({
        type: COSTUMER_DETAIL_STATUS,
        payload: 'idle',
      });
    }
  };
}
