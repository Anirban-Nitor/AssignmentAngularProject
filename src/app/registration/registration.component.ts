import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationResponse: any;
  constructor(private _accountService: AccountService, private _route: Router,
              private Fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addUser = this.Fb.group({
    userName : ['', [Validators.required]],
    Email: ['',[Validators.required]],
    Password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  })
  

  onAddUser() {
    if (this.addUser.value.Password == this.addUser.value.confirmPassword) {

      this._accountService.Registration(this.addUser.value).subscribe(data =>
        {
          this.registrationResponse = data;
          console.log(this.registrationResponse);
        })
    }
    else
    {
      alert("Password Doesnt match Confirm password");
      this._route.navigate(['registration']);
    }
    this._route.navigate(['login']);
  }

}
