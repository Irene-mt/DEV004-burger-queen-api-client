import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../interfaces/order';
import { EditOrder } from '../interfaces/edit-order';
import { CreateOrder } from '../interfaces/create-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  constructor(private http: HttpClient,
    ) { }

    getOrders(){
      return this.http.get('http://localhost:8080/orders')
    }

    postOrder(body: CreateOrder){
      return this.http.post('http://localhost:8080/orders', body)
    }

    editOrder(orderId: number, body: EditOrder){
      return this.http.patch(`http://localhost:8080/orders/${orderId}`, body)
    }

    deleteOrder(orderId: number){
      return this.http.delete(`http://localhost:8080/orders/${orderId}`)
    }

    
}
