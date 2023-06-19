import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CreateProduct } from '../interfaces/create-product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get("http://localhost:8080/products")
  }

  addProduct(body: CreateProduct){
    return this.http.post('http://localhost:8080/products', body)
  }

  deleteProduct(uid: number){
    return this.http.delete(`http://localhost:8080/products/${uid}`)
  }

  getProduct(uid: number):Observable<any>{
    return this.http.get(`http://localhost:8080/products/${uid}`)
  }

  editProduct(uid:number, body: CreateProduct){
    return this.http.patch(`http://localhost:8080/products/${uid}`, body)
  }
}
