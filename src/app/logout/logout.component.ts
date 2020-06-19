import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _accountService: AccountService, private _route: Router) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this._accountService.currentUser = null;
    this._route.navigate(['login']);
  }

}
