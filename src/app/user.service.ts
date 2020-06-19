import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  editUserData: any;
  public _url = 'https://localhost:44375/api/Users/';
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(this._url)
  }

  editUserDataFunction(id, value: Users) {
    return this._http.put(this._url+id, value);
  }

  deleteUser(id) {
    return this._http.delete(this._url+id);
  }
}
