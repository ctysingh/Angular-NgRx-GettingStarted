import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ProductActions from './../state/product.actions';

import { Observable, Subscription } from 'rxjs';

import { Product } from '../product';

import { getCurrentProduct, getError, getProducts, getShowProductCode, State } from '../state/product.reducer';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';

  // Used to highlight the selected product in the list
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.selectedProduct$ =  this.store.select(getCurrentProduct);
    this.errorMessage$ = this.store.select(getError);
    this.products$ = this.store.select(getProducts);

    this.store.dispatch(ProductActions.loadProducts());

    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.intializeCurrentProduct());
    //this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    //this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductActions.setCurrentProduct({product}));
  }

}
