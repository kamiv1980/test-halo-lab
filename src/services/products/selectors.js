/** @format */
import { createSelector } from '@reduxjs/toolkit';

export const selectorProducts = (state) => state.products.data;

export const selectorMinPrice = createSelector(selectorProducts, (products) => {
  let list = products;
  if (!!list.length) {
    return list.reduce((prev, current) => (+prev.price < +current.price ? prev : current));
  } else {
    return null;
  }
});
