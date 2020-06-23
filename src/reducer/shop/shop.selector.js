import { createSelector } from "reselect";

const selectShopData = (state) => state.shop;

export const selectShopDataCollection = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopDataCollection],
  (collections) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionsUrlParam) =>
  createSelector(
    [selectShopDataCollection],
    (collections) => collections[collectionsUrlParam]
  );
