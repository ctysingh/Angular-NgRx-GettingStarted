import { createAction, props } from "@ngrx/store";
import { Product } from "../product";

export const toggleProductCode = createAction(
  '[Product] Toggle Product Code'
);

export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{currentProductId: number}>()
);

export const intializeCurrentProduct = createAction(
  '[Product] Initialize Current Product'
);

export const clearCurrentProduct = createAction(
'[Product] Clear Current Product'
);

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductSuccess = createAction(
  '[Product] Load Product Success',
  props<{products: Product[]}>()
);

export const loadProductFailure = createAction(
  '[Product] Load Product Failure',
  props<{error: string}>()
);


