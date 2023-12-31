import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductStore } from 'src/app/model/productModel';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductStore[] = [];
  @Output() userInfo = new EventEmitter();
  totals: number | string = '';
  productCount: string[] = ['1', '2', '3', '4', '5'];
  selectedItem = '';
  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartProduct();
    this.total();
  }

  onSubmit(value: any) {
    this.cartService.clearCartProduct();
    this.route.navigate([`success/${value.firstName}/${this.totals}`]);
  }

  refresh(): void {
    window.location.reload();
  }

  selectChange(value: string, product: ProductStore) {
    const index = this.cartItems.indexOf(product);
    this.cartItems[index] = product;
    this.cartItems[index].amount = value;
    localStorage.setItem('products', JSON.stringify(this.cartItems));
    this.total();
    this.refresh();
  }

  total() {
    this.totals = this.cartItems.reduce((accurecy, i) => {
      this.totals = parseFloat(
        (accurecy + i.price * Number(i.amount)).toFixed(2)
      );
      return this.totals;
    }, 0);
  }

  deleteItem(id: number) {

    const storageProducts = this.cartService.getCartProduct();
    const products = storageProducts.filter(
      (product: ProductStore) => product.id !== id
    
    );
    window.localStorage.clear();
    localStorage.setItem('products', JSON.stringify(products));
    // alert('Delete suceess!');
    const message = 'Item has been removed from your cart.';
    alert(message);
    this.refresh();
    this.total();
  }
}
