import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TimesheetApp';
  public loggedInUser: any;
  public currentUserEmail: any;

  constructor(private _account: AccountService) {}

}
