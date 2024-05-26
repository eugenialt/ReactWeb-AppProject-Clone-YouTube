import { AnyAction } from 'redux';
import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST } from './action';
interface DataState {
  loading: boolean;
  data: any[];
  error: Error | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

export const dataReducer = (
  state: DataState = initialState,
  action: AnyAction
): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
