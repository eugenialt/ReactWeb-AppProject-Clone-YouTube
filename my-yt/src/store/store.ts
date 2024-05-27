import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { dataReducer } from './reducer';
import { DataState, DataAction } from './types';

const store = createStore(
  dataReducer,
  applyMiddleware(thunk as ThunkMiddleware<DataState, DataAction>)
);

export default store;