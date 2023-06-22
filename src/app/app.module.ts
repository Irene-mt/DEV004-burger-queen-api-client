import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AuthInterceptorService } from './services/auth-interceptor.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { OrderModalComponent } from './order-modal/order-modal.component';
import { HeaderComponent } from './header/header.component';
import { WorkersCardComponent } from './workers-card/workers-card.component';
import { AddWorkerModalComponent } from './add-worker-modal/add-worker-modal.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { EditWorkerModalComponent } from './edit-worker-modal/edit-worker-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { PendingOrderCardComponent } from './pending-order-card/pending-order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoodMenuComponent,
    WorkersListComponent,
    OrderModalComponent,
    HeaderComponent,
    WorkersCardComponent,
    AddWorkerModalComponent,
    ProductsListComponent,
    ProductCardComponent,
    AddProductModalComponent,
    EditWorkerModalComponent,
    EditProductModalComponent,
    PendingOrdersComponent,
    PendingOrderCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
