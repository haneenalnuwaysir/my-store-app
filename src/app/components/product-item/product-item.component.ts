import { Component, Input, OnInit } from '@angular/core';
import { ProductStore } from 'src/app/model/productModel';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: ProductStore;
  selectedItem = '1';
  productCount: string[] = ['1', '2', '3', '4', '5', '6'];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  selectItemChange(value: any) {
    this.selectedItem = value;
  }
  refresh(): void {
    window.location.reload();
  }
  addItem(product: ProductStore): void {
    const cProducts: ProductStore[] = this.cartService.getCartProduct();
    let productInCart = cProducts.find((e) => e.id === product.id);
    if (productInCart) {
      productInCart.amount = this.selectedItem;
      productInCart ? this.productService.addProduct(cProducts) : null;
    } else {
      cProducts.push(Object.assign(product, { amount: this.selectedItem }));
      this.productService.addProduct(cProducts);
      const message = `${product.name} has been added to your cart.`;
      alert(message);
    }
    this.refresh();
  }

}
