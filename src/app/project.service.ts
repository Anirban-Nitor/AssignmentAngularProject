import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public EditProjectData: any;
  public UserTobeAssigned: any;
  _url: string = "https://localhost:44375/api/Projects/";
  constructor(private _http: HttpClient) { }

  getProjectList() {
    return this._http.get(this._url);
  }

  getProject(id): Observable<any> {
    return this._http.get(this._url+id);
  }

  addProject(value: any): Observable<any> {
    return this._http.post(this._url, value);
  }

  deleteProject(id) {
    return this._http.delete(this._url+id);
  }

  editProject(id, value: Projects) {
    return this._http.put(this._url+id, value);
  }

  assignProjectToUser(value: any): Observable<any> {
    return this._http.post("https://localhost:44375/api/Users/AssignProject",value)
  }
}
