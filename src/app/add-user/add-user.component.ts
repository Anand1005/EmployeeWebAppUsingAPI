import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(
    private http: HttpClient,
    private toast: NgToastService
  ) {
  }

  // function for adding data tpo the databse
  addEmployeeData(data: any) {
    this.http.post('https://localhost:7037/api/Employee/addEmployee', data).subscribe()
    this.toast.success({ summary: "Employee Added Successfully", duration: 4000 })
    location.reload()
  }
}
