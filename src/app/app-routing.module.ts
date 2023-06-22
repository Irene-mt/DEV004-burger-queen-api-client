import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'food-menu', component: FoodMenuComponent },
  { path: 'workers-list', component: WorkersListComponent },
  { path: 'products-list', component: ProductsListComponent},
  { path: 'pending-orders', component: PendingOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
