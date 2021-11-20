/** @format */
import { actionTypes } from './actions';

const initialState = {
  data: [],
};

export function productsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return { ...payload };

    default:
      return state;
  }
}
