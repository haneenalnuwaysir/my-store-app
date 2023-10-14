import { Injectable } from '@angular/core';
// import { ProductStore } from '../model/productModel';
import { Address } from '../model/address';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  storageData = window.localStorage;
  ProductStore =[];
  confirm: Address = {
    firstName: '',
    address:'',
    credit:0,
  
  };
  constructor() {}
  getCartProduct() {
    const getTheProduct = this.storageData.getItem('products');
    return getTheProduct ? JSON.parse(getTheProduct) : [];
  }
  clearCartProduct(): void {
    this.storageData.clear();
  }
  addAddressToOrder(data: Address): void {
    this.confirm = data;
  }

  getAddress(): Address {
    this.confirm.firstName;
    return this.confirm;
  }
}
