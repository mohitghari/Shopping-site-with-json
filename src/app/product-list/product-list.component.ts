import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { ProductModel } from '../product-model';
import { ManageShoppingCartService } from '../manage-shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private getProductService: GetProductsService,
    private manageCart: ManageShoppingCartService
  ) { }
  searchText;
  products: ProductModel[];

  
  ngOnInit() {
    this.getProductService.getProducts().subscribe(
      data => {
        this.products = data.products;
        console.log(this.products)
        if (this.manageCart.cartProductsList) {
          this.products.map(product => {
            const search = this.manageCart.cartProductsList.find(p => p.id === product.id)
            if (search) {
              return product.quantity = search.quantity
            }
          })
        }
      }
    )

  }

  addToCart(product: ProductModel, index: number) {
    const msg = this.manageCart.addProducts(product);
    this.products[index].quantity ? this.products[index].quantity += 1 : this.products[index].quantity = 1;
    console.log('this', this.products[index].quantity)
  }

  removeCart(product: ProductModel, index: number) {
    this.manageCart.delProducts(product);
    this.products[index].quantity = this.products[index].quantity -= 1
    //console.log('this', this.products[index].quantity)
  }

  onSearchChange(val){

  }

}
