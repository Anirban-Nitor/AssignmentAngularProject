import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeLog } from './time-log';

@Injectable({
  providedIn: 'root'
})
export class TimeLogService {

  _url: string = 'https://localhost:44375/api/TimeLogs/';
  editTimeLogData : any;
  constructor(private _http: HttpClient) { }

  addTimeLog(value): Observable<any> {
    return this._http.post(this._url, value);
  }

  getAllTimeLogs() {
    return this._http.get(this._url);
  }

  deleteLog(id) {
    return this._http.delete(this._url+id)
  }

  editLog(id, value:TimeLog) {
    return this._http.put(this._url+id, value);
  }
}
