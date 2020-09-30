import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ConfirmationOrderComponent } from './confirmation-order/confirmation-order.component';
import { ProductResolverService } from './product-resolver.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
     path: 'order-confirmation', 
     component: ConfirmationOrderComponent,
     resolve : { products : ProductResolverService }
  },
  { 
    path: 'products', 
    component: ProductListComponent 
  },
  {
    path:'login',
    component:LoginComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
