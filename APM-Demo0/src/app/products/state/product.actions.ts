import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{product: Product}>()
);

export const intializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const clearCurrentProduct = createAction(
'[Product] Clear Current Product'
);
