import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  // This url is of the api that u want
  url = 'https://localhost:7037/api/Employee';
  constructor(private http: HttpClient) {
  }

  // this function is later called to get the json of the API
  usersData() {
    return this.http.get(this.url)
  }

  loginUrl = "https://localhost:7037/api/Employee/authenticate";
  login(loginObj: any) {
    return this.http.post(this.loginUrl, loginObj);
  }

}
