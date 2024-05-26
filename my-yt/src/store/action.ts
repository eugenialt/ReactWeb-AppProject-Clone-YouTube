import { AnyAction, Dispatch } from 'redux';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataRequest = (): AnyAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any): AnyAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: Error): AnyAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});