import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { AuthLoginService } from '../services/auth-login.service';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css'],
})
export class PendingOrdersComponent {
  pendingOrders: Order[] = [];
  formattedData!: any[];

  constructor(
    public ordersService: OrdersService,
    private logService: AuthLoginService,
  ) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe({
      next: res => {
        const allOrders: Order[] = <Order[]>res;
        this.pendingOrders = allOrders.filter((eachOrder) => {
          return eachOrder.status === 'pending'
        })
        return this.pendingOrders
      },
      error: err => console.log(err)
    });
  }

  logOut() {
    this.logService.logout();
  }

}

