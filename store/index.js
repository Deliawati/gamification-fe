import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import me from '../slices/meSlice';
import transaction from '../slices/transactionSlice';
import point from '../slices/pointSlice';
import reward from '../slices/rewardSlice';
import newReducers from '../core/redux/reducers';
import persistStoreConfig from '../core/redux/persistStoreConfig';
import defaultMiddleware from '../core/redux/middlewares/defaultMiddleware';

const reducers = combineReducers({
  me,
  transaction,
  point,
  reward,
  ...newReducers,
});

const persistedReducer = persistReducer(persistStoreConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddleware)
    .concat(thunk),
});

const makeStore = () => store;

const wrapper = createWrapper(makeStore);

export const persistor = persistStore(store);

export default wrapper;
