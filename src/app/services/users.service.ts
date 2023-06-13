import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,
    private storage: StorageService
  ) { }

  getAllUsers() {
    return this.http.get("http://localhost:8080/users")
  }

  getUserInfo(): Observable<any> {
    const token  = this.storage.getToken()
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });
    return this.http.get("http://localhost:8080/users/{uid}", { headers: header })
  }
}
