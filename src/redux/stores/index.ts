import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from 'redux/middleware/api';
import reducers from 'redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk, apiMiddleware));
export default store;
