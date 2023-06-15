import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { CreateWorker } from '../interfaces/create-worker';

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

  deleteUser(uid: number){
    return this.http.delete(`http://localhost:8080/users/${uid}`)
  }
}
