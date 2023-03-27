import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { DisplayUserDataComponent } from './display-user-data/display-user-data.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private toast: NgToastService
  ) { }
  ngOnInit(): void {
  }

}
