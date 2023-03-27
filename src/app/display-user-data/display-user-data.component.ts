import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.css', '../add-user/add-user.component.css']
})
export class DisplayUserDataComponent {
  @Input() retrievedData: any;

  // This is where the data is taken from the url
  retrievedUserData: any;
  constructor(
    private employeeData: UsersDataService,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) { employeeData.usersData() }

  // function for retriving the employee id for deleting
  static employeeIdForDeletion = -1;
  getEmployeeIdForDeletion(id: any) {
    return DisplayUserDataComponent.employeeIdForDeletion = id;
  }

  // delete the employee
  deletingEmployeeUsingButtonAction(performDeletion: any) {
    var idOfEmployeeForDeletion = this.getEmployeeIdForDeletion(DisplayUserDataComponent.employeeIdForDeletion);
    if (performDeletion == true) {
      this.http.delete('https://localhost:7037/api/Employee/' + idOfEmployeeForDeletion).subscribe((updatedDataAfterdeletion) => {
        this.retrievedUserData = updatedDataAfterdeletion;
      });
    }
    this.toast.success({ detail: "Deleted Successfully", duration: 4000 })
  }

  getEmployeeIdForUpdation(employeeId: any) {
    // console.log(employeeId)
  }

  // updating the employee data
  performUpdation(updatedData: any, updationAction: any) {
    // if (updationAction == true) {
    //   this.http.put('https://localhost:7037/api/Employee/updateUser', updatedData).subscribe((updatedDataAfterUpdation) => {
    //     this.retrievedUserData = updatedDataAfterUpdation;
    //   })
    //   this.toast.success({ detail: "Updated Successfully", duration: 4000 })
    // }

    console.log(updatedData)
  }


  // pagination logic
  title = 'pagination';
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  ngOnInit(): void {
    this.postList();
  }


  postList(): void {
    this.employeeData.usersData().subscribe(response => {
      this.retrievedUserData = response;
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }



  // logout
  filterTerm: any;
  logOut() {
    localStorage.clear();
    sessionStorage.clear();
    this.toast.success({ detail: "Logged out Successfully ", duration: 4000 })
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

}
