import { Component,OnInit } from '@angular/core';
import { ProductStore } from 'src/app/model/productModel';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string = 'My Store';
  productListCart!: ProductStore[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productListCart = this.cartService.getCartProduct();
    // this.calculateTheItem(this.productListCart);
  }

  // calculateTheItem(cart: ProductStore[]) {
  //   let sum = 0;
  //   cart.forEach((i) => {
  //     sum += Number(i.amount);
  //   });
  //   const element = document.getElementById('amountOfCart') as HTMLElement;
  //   element.innerHTML = sum.toString();
  // }
}
