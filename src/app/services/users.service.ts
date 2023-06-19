import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateWorker } from '../interfaces/create-worker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,
    // private storage: StorageService
  ) { }

  getAllUsers() {
    return this.http.get("http://localhost:8080/users")
  }

  createUser(body: CreateWorker){
    return this.http.post('http://localhost:8080/users', body)
  }

  deleteUser(uid: number): Observable<any>{
    return this.http.delete(`http://localhost:8080/users/${uid}`)
  }

  getUser(uid: number):Observable<any>{
    return this.http.get(`http://localhost:8080/users/${uid}`)
  }

  editUser(uid: number, body:CreateWorker){
    return this.http.patch(`http://localhost:8080/users/${uid}`, body)
  }
}
