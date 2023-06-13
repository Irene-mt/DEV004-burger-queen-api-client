import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/login", user)
  }

  logout(): void {
    localStorage.removeItem('login-token');
    localStorage.removeItem('user-id');
    localStorage.removeItem('user-email');
    localStorage.removeItem('user-rol');
    this.router.navigate(['/login'])
  }
}
