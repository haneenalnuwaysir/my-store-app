import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ProductStore } from 'src/app/model/productModel';
import { ProductService } from 'src/app/service/product.service';
import { takeUntil } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  private ngUnsub = new Subject<void>();
  product!: ProductStore;
  products!: ProductStore[];
  quantity: number = 1;
  id!: number;
  itemCount: string[] = ['1', '2', '3', '4', '5'];
  selectedItem = '1';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService
      .getTheProduct()
      .pipe(takeUntil(this.ngUnsub))
      .subscribe({
        next: (response) => {
          this.products = response;
          this.product = this.getItemDetails(this.id);
          console.log('this.product',this.product);
          console.log('this.products',this.products);

        },
        error: (err) => console.log(err),
      });
  }

  getItemDetails(id: any) {
    return this.products.filter((i) => i.id === id)[0];
  }

  selectItemChange(value: any) {
    this.selectedItem = value;
  }
  refresh(): void {
    window.location.reload();
  }

  addItem(product: ProductStore): void {
    const cartItems: ProductStore[] = this.cartService.getCartProduct();
    let productInTheCart = cartItems.find((element) => element.id === product.id);
    if (productInTheCart) {
      productInTheCart.amount = this.selectedItem;
      productInTheCart ? this.productService.addProduct(cartItems) : null;
    } else {
      cartItems.push(Object.assign(product, { amount: this.selectedItem }));
      this.productService.addProduct(cartItems);
      const message = `${product.name} has been added to your cart.`;
      alert(message);
    }
    this.router.navigate(['/cart']);
  }



  ngOnDestroy() {
    this.ngUnsub.next();
    this.ngUnsub.complete();
  }

}
