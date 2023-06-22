import { Component } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginForm!: FormGroup;

  constructor(
    public loginServ: AuthLoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  logIn() {
    let role: string;
    this.loginServ.login(this.loginForm.value).subscribe({
        next: (data) => {
          role = data.user.role
          // save data in local storage
          localStorage.setItem('login-token', (data.accessToken))
          localStorage.setItem('user-id', (data.user.id))
          localStorage.setItem('user-email', (data.user.email))
          localStorage.setItem('user-rol', (data.user.role))
          // role defines where to navigate
          if (role === 'waiter') {
            this.router.navigate(['/food-menu'])
          } else if (role === 'admin') {
            this.router.navigate(['/workers-list'])
          } else if (role === 'chef') {
            this.router.navigate(['/pending-orders'])
          }
        },
        // get any error of the request
        error: (err) => {
        this.errorMessage = err.error
        }
      });
  }
}