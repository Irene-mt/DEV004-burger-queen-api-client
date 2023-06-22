import { Component, Input } from '@angular/core';
import { ProductToOrder } from '../interfaces/product-to-order';
import { StorageService } from '../services/storage.service';
import { OrdersService } from '../services/orders.service';
import { Order } from '../interfaces/order';
import { DatePipe } from '@angular/common';
import { CreateOrder } from '../interfaces/create-order';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css'],
  providers: [DatePipe]
})
export class OrderModalComponent {
  @Input() orderList: ProductToOrder[] = [];
  @Input() totalPrice!: number;

  constructor(
    private storage: StorageService,
    private orders: OrdersService,
    private datePipe: DatePipe,
  ) { }

  userId = this.storage.getIdUser();

  calculateTotal() {
    this.totalPrice = 0;
    for (let i = 0; i < this.orderList.length; i++) {
      this.totalPrice += this.orderList[i].priceProduct
    }

  }

  findProductById = (id: number): ProductToOrder | undefined => {
    return this.orderList.find((productToOrder: { product: { id: number; }; }) => productToOrder.product.id === id);
  }

  addProduct(product: ProductToOrder) {
    const existingProduct = this.findProductById(product.product.id);
    if (existingProduct) {
      existingProduct.qty++;
      existingProduct.priceProduct += product.product.price;
    }
    this.calculateTotal()
  }

  deleteProduct(product: ProductToOrder) {
    const existingProduct = this.findProductById(product.product.id);
    if (existingProduct) {
      if (existingProduct.qty === 1) {
        const index = this.orderList.indexOf(product);
        if (index !== -1) {
          this.orderList.splice(index, 1);
        }
      } else {
        existingProduct.qty--;
        existingProduct.priceProduct -= product.product.price;
      }
    }
    this.calculateTotal()
  }

  cancelOrder() {
    this.orderList.splice(0);
    this.totalPrice -= this.totalPrice
  }

  createOrder(customerName: string) {
    const date = new Date();
    const convertedDate = this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');
    const orderData: CreateOrder = {
      client: customerName,
      products: this.orderList,
      status: 'pending',
      userId: this.userId,
      dateEntry: convertedDate,
      currentTime: 0,
    }
    this.orders.postOrder(orderData).subscribe((res)=>{
      console.log('info', res);
      
    })
    this.orderList.splice(0);
    this.totalPrice -= this.totalPrice



  }


}
