import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductStore } from 'src/app/model/productModel';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private ngUnsub = new Subject<void>();
  productItems: ProductStore[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getTheProduct()
      .pipe(takeUntil(this.ngUnsub))
      .subscribe({
        next: (res) => {
          this.productItems = res;
        },
        error: (err) => console.log(err),
      });
  }

}
