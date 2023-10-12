import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storageData = window.localStorage;

  constructor() {}
  getCartProduct() {
    const getTheProduct = this.storageData.getItem('products');
    return getTheProduct ? JSON.parse(getTheProduct) : [];
  }
  clearCartProduct(): void {
    this.storageData.clear();
  }
}
