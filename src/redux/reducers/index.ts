import { combineReducers } from 'redux';
import countingReducer from './counting.reducers';
import errorReducer from './error.reducer';
import loadingReducer from './loading.reducer';

const reducers = {
  loading: loadingReducer,
  error: errorReducer,
  counting: countingReducer,
};

export default combineReducers(reducers);
