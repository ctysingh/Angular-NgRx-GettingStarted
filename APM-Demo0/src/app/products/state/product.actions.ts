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

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{product: Product}>()
);

export const updateProductSuccess = createAction(
  '[Product] Update Product Success',
  props<{product: Product}>()
)

export const updateProductFailure = createAction(
  '[Product] Update Product Failure',
  props<{error: string}>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{productId: number}>()
);

export const deleteProductSuccess = createAction(
  '[Product] Delete Product Success',
  props<{productId: number}>()
)

export const deleteProductFailure = createAction(
  '[Product] Delete Product Failure',
  props<{error: string}>()
);


