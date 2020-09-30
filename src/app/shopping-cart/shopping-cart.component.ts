import { Component, OnInit } from '@angular/core';
import { ManageShoppingCartService } from '../manage-shopping-cart.service';
import { ProductModel, CartProductModel } from '../product-model';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  producttotal: number[] = [];
  overalltotal;
  submitted;
  alert = false;

  constructor(private manageCart: ManageShoppingCartService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  cartProducts: CartProductModel[] = [];

  myForm: FormGroup;
  quantityManagement: FormGroup;


  ngOnInit() {
    //this.manageCart.copydata();

    this.manageCart.getProducts().subscribe(
      data => {
        //console.log(data);
        this.cartProducts = data;
        // console.log(this.cartProducts);

      }
    );


    this.myForm = this.fb.group({
      terms: ['', Validators.required],
    });


    this.getTotal();

  }

  getTotal() {
    this.overalltotal = this.cartProducts.reduce(
      (total, current) => {
        return total + (current.price * current.quantity)
      },
      0
    )
  }

  get f() { return this.myForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }


    if (localStorage.getItem("login") == "true") {
      this.router.navigate(['./order-confirmation']);
    }else{
      this.router.navigate(['./login']);
    }

  }



}
