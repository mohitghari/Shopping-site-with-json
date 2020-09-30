import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ManageShoppingCartService } from './manage-shopping-cart.service';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private manageCart: ManageShoppingCartService) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> | Promise<any> | any {
    return this.manageCart.getProducts()
      .pipe(
        flatMap((products) => {
          this.manageCart.emptyCart();
          return of(products)
        })
      );
  }
}
