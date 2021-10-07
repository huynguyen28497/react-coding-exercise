import { combineReducers } from 'redux';
import countingReducer from './counting.reducers';

const reducers = {
  counting: countingReducer,
};

export default combineReducers(reducers);
