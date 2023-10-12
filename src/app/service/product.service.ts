import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ProductStore } from '../model/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  storageData = window.localStorage;
  apiUrl = 'http://localhost:4200/assets/data.json';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) {}

  getTheProduct(): Observable<ProductStore[]> {
    return this.http.get<ProductStore[]>(this.apiUrl);
  }
  addProduct(product: ProductStore[]): void {
    this.storageData.setItem('products', JSON.stringify(product));
  }

  getProductById(id: number): Observable<ProductStore> {
    const url_api = `${this.apiUrl}/${id}`;
    return this.http
      .get<ProductStore>(url_api)
      .pipe(catchError(this.handleError<ProductStore>(`getProduct id=${id}`)));
  }
}
