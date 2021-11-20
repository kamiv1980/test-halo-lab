/** @format */

import { combineReducers } from 'redux';

import { productsReducer } from './products/reducer';
import { overlayReducer } from './overlay/reducer';

export const rootReducer = combineReducers({
  products: productsReducer,
  overlay: overlayReducer,
});
