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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoodMenuComponent,
    WorkersListComponent,
    OrderModalComponent,
    HeaderComponent,
    WorkersCardComponent,
    
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
