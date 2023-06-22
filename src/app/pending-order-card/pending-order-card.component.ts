import { Component, Input } from '@angular/core';
import { Order } from '../interfaces/order';
import { OrdersService } from '../services/orders.service';
import { EditOrder } from '../interfaces/edit-order';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-pending-order-card',
  templateUrl: './pending-order-card.component.html',
  styleUrls: ['./pending-order-card.component.css'],
  providers: [DatePipe]
})
export class PendingOrderCardComponent {
  @Input() pendingOrders: Order[] = [];
  selectedOrder: any;

  constructor(
    private orderService: OrdersService,
    private datePipe: DatePipe,
  ) { }

  completeOrder(orderId: number, dateEntry: any) {
    const date = new Date();
    const convertedDate = this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    if (dateEntry && convertedDate) {
      const timer = this.calculateTime(dateEntry, convertedDate);
      const OrderData: EditOrder = {
        status: 'complete',
        currentTime: timer
      }
      this.orderService.editOrder(orderId, OrderData).subscribe(
        (res) => {
          console.log(res);
          location.reload();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  calculateTime(date1: string, date2: string) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    const difMs = secondDate.getTime() - firstDate.getTime();

    const sec = Math.floor(difMs / 1000);
    const min = Math.floor(sec / 60);
    const hrs = Math.floor(min / 60);
    const days = Math.floor(hrs / 24);

    const totalSec = sec % 60;
    const totalMin = min % 60;
    const totalHrs = hrs % 24;

    if (days > 0) {
      //console.log(`${days}d ${totalHrs}h ${totalMin}m ${totalSec}s`);
      return `${days}d ${totalHrs}h ${totalMin}m ${totalSec}s`
    } else {
      //console.log(`${totalHrs}h ${totalMin}m ${totalSec}s`);
      return `${totalHrs}h ${totalMin}m ${totalSec}s`
    }
  }

  cancelOrder(orderId: number) {
    this.selectedOrder = orderId;
  }

  noSelectOrder() {
    this.selectedOrder = null;
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(
      (res) => {
        console.log(res);
        location.reload();
      },
      (err) => {
        console.log(err);

      }
    )
  }
}
