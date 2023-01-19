import { loadingBarReducer } from 'react-redux-loading-bar';
import authenticationReducer from './authenticationSlice';
import luckyspinReducer from './luckyspinSlice';
import costumerReducer from './costumerSlice';
import campaignReducer from './campaignSlice';
import minigamesReducer from './minigamesSlice';
import achivementReducer from './achivementSlice';

const reducers = {
  authentication: authenticationReducer,
  loadingBar: loadingBarReducer,
  luckyspin: luckyspinReducer,
  costumer: costumerReducer,
  campaign: campaignReducer,
  minigames: minigamesReducer,
  achivement: achivementReducer,
};

export default reducers;
