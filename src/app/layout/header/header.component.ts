import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  pageTitle: string = 'My Store';
  cartProductList!: Product[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartProduct();
    this.calculate(this.cartProductList);
  }

  calculate(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.amount);
    });
    const element = document.getElementById('cartAmount') as HTMLElement;
    element.innerHTML = sum.toString();
  }
}
