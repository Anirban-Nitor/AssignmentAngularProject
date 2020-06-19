import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editResponse: any;
  constructor(private _userService: UserService, private _route: Router,
              private Fb: FormBuilder) { }
  
  public editUserdata = this._userService.editUserData;

  ngOnInit(): void {
  }

  editUser = this.Fb.group({
    userId: [this.editUserdata.userId],
    userName: [this.editUserdata.userName, [Validators.required]],
    Email: [this.editUserdata.email, [Validators.required]],
  });

  onUpdateUser() {
    this._userService.editUserDataFunction(this.editUserdata.userId, this.editUser.value).subscribe(data =>
      {
        this.editResponse = data;
        console.log(this.editResponse);
      });
    this._route.navigate(['userList']);
  }
}
