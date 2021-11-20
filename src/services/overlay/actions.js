export const actionTypes = {
  SET_LOADING_BY_TYPE: 'SET_LOADING_BY_TYPE',
  REMOVE_LOADING_BY_TYPE: 'REMOVE_LOADING_BY_TYPE',
};

const set = {
  loadingByType: (payload) => ({ type: actionTypes.SET_LOADING_BY_TYPE, payload }),
};

const remove = {
  loadingByType: (payload) => ({ type: actionTypes.REMOVE_LOADING_BY_TYPE, payload }),
};

export { set, remove };
