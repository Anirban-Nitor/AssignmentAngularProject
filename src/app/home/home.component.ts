import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  onClickProject() {
    this._route.navigate(['projectList'])
  }

  onClickUser() {
    this._route.navigate(['userList'])
  }

  onClickLog() {
    this._route.navigate(['logList'])
  }

}
