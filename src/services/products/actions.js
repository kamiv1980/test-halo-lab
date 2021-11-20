/** @format */

export const actionTypes = {
  GET_PRODUCTS_REQUEST: 'GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
};

export let items = {
  get: {
    request: () => ({ type: actionTypes.GET_PRODUCTS_REQUEST }),
    success: (payload) => ({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload }),
    error: (payload) => ({ type: actionTypes.GET_PRODUCTS_ERROR, payload }),
  },
};
