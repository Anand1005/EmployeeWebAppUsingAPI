import { NgToastService } from 'ng-angular-popup';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersDataService } from '../services/users-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  // In order to use the navigation import router n then create a variable for router
  constructor(
    private router: Router,
    private http: HttpClient,
    private toast: NgToastService
  ) {
  }

  // function for performing login
  onLogin(loginData: any) {
    this.http.post('https://localhost:7037/api/Employee/authenticate', loginData).subscribe((response) => {
      if (response.toString() == "true") {
        this.toast.success({ detail: "Login Successfull ", summary: "Login credetials matched", duration: 4000 })
        // the token is initialised manually which should be done through API
        localStorage.setItem('token', 'theuserisloggedin');
        this.router.navigate(['home'])
      } else {
        this.toast.error({ detail: " Invalid Credentials ", summary: "Check Login Credentials", duration: 4000 })
      }
    })

  }
}
