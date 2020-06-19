import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: any;
  deleteResponse: any;
  constructor(private _userService: UserService, private _projectService: ProjectService
              ,private _route: Router) { }

  ngOnInit(): void {
  }

  getAllUserList() {
    this._userService.getAllUsers().subscribe(data => {
      this.userList = data;
      console.log(this.userList);
    })
  }

  assignProject(user) {
    this._projectService.UserTobeAssigned = user;
    this._route.navigate(['assignProject']);
  }

  editProject(value) {
    this._userService.editUserData = value;
    this._route.navigate(['editUser']);
  }

  deleteProject(value) {
    this._userService.deleteUser(value.userId).subscribe(data =>
      {
        this.deleteResponse = data;
        location.reload();
      });
  }

}
