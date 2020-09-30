import { Component, OnInit } from '@angular/core';
import { ManageShoppingCartService } from '../manage-shopping-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartProductModel } from '../product-model';


@Component({
  selector: 'app-confirmation-order',
  templateUrl: './confirmation-order.component.html',
  styleUrls: ['./confirmation-order.component.css']
})
export class ConfirmationOrderComponent implements OnInit {
  overalltotal;
  submitted;
  constructor(private manageCart: ManageShoppingCartService,
              private router: Router,
              private activatedRoute:ActivatedRoute
  ) { }
  cartProducts: CartProductModel[] = [];

  randomNumber;

  ngOnInit() {

    this.cartProducts = this.activatedRoute.snapshot.data['products'];
    console.log(this.cartProducts)
    this.cartProducts.filter(product => product.quantity != 0)
    this.randomNumber = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    this.overalltotal = this.cartProducts.reduce(
      (total,current) =>{
          return total + (current.price * current.quantity)
      },
      0
    )
  }

  goToHome(){
    this.router.navigate(['/products']);
  }
}
