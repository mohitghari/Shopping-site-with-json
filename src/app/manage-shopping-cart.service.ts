import { Injectable } from '@angular/core';
import { ProductModel, CartProductModel } from './product-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageShoppingCartService {

  cartProductsList: CartProductModel[] = [];
  constructor() { }
  orderHistory: CartProductModel[] = [];
  addProducts(product: ProductModel): string {
    var existingProduct = this.cartProductsList.findIndex(data => data.id == product.id);
    var ab = this.cartProductsList[existingProduct]
    if (ab) {
      ab.quantity = ab.quantity + 1;
      return "this product is already added bt it will increment it's quantity"
    }
    else {
      this.cartProductsList.push({
        ...product,
        quantity: 1
      });
      return "product has been added to your cart"
    }
  }

  delProducts(product: ProductModel) {
    var existingProduct = this.cartProductsList.findIndex(data => data.id == product.id);
    var ab = this.cartProductsList[existingProduct]
    if (ab) {
      ab.quantity -= 1;
    }
  }

  getProducts(): Observable<CartProductModel[]> {
    return of(this.cartProductsList);
  }

  emptyCart() {
    this.cartProductsList = [];
  }

}
