import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Users } from '../Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public response : any;
  public currentLogin: any;
  constructor(private fb: FormBuilder, private _account: AccountService, private _route: Router) { }

  loginForm = this.fb.group({
    Email: ['', [Validators.required, Validators.minLength(5)]],
    Password: ['']
  })

  ngOnInit(): void {
  }

  onLogin() {
    this._account.Login(this.loginForm.value).subscribe(data => 
      { 
        this.response = data; 
        console.log(this.response);
        if(this.response != null)
        {
          this._account.currentUser = this.response;
          this._route.navigate(['home']);
        }
        
    })
  }
  
  goToRegister() {
    this._route.navigate(['registration'])
  }

}
