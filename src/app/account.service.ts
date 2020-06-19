import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  response: Users;
  currentUser: any;
  _url: string = "https://localhost:44375/api/Account/";

  constructor(private _http: HttpClient) { }

  Login(value): Observable<any> {
    return this._http.post(this._url, value);
 }

 getCurrentUser() {
   return this.currentUser;
 }

  Registration(value): Observable<any> {
    return this._http.post(this._url+"Registration",value);
  }
 

}
