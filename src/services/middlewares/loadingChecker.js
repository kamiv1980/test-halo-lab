/** @format */

import { set, remove } from '../overlay/actions';

export const loadingChecker =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    const { type } = action;
    const isRequest = type.includes('REQUEST');
    const isSuccess = type.includes('SUCCESS');
    const isError = type.includes('ERROR');

    if (isRequest) {
      const splitByType = type.split('_REQUEST')[0];
      dispatch(set.loadingByType(splitByType));
    }

    if (isSuccess) {
      const splitByType = type.split('_SUCCESS')[0];
      dispatch(remove.loadingByType(splitByType));
    }

    if (isError) {
      const splitByType = type.split('_ERROR')[0];
      dispatch(remove.loadingByType(splitByType));
    }

    next(action);
  };
