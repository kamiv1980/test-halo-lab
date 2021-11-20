import { actionTypes } from './actions';

const initialState = {
  loadingByType: [],
};

export const overlayReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_LOADING_BY_TYPE:
      return { ...state, loadingByType: [...state.loadingByType, payload] };
    case actionTypes.REMOVE_LOADING_BY_TYPE:
      return { ...state, loadingByType: state.loadingByType.filter((el) => el !== payload) };
    default:
      return state;
  }
};
