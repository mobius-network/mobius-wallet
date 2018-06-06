import { merge } from 'state/utils';
import { createActions, createReducer } from 'redux-yo';

export const requestActions = createActions(
  ['fetchStart', 'fetchSuccess', 'fetchFail'],
  'requests'
);

const initialState = {
  requestError: undefined,
};

export const requestsReducer = createReducer(
  {
    [requestActions.fetchStart]: (state, { name }) =>
      merge(state, {
        [name]: {
          data: undefined,
          isFetching: true,
        },
      }),
    [requestActions.fetchSuccess]: (state, { name, response }) =>
      merge(state, {
        [name]: {
          data: response,
          success: true,
          isFetching: false,
        },
      }),
    [requestActions.fetchFail]: (state, { name, error }) =>
      merge(state, {
        [name]: {
          error,
          data: undefined,
          success: false,
          isFetching: false,
        },
        requestError: error,
      }),
  },
  initialState
);
