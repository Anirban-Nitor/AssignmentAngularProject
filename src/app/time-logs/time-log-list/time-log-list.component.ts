import { Component, OnInit } from '@angular/core';
import { TimeLogService } from 'src/app/time-log.service';
import { getLocaleDayNames } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-log-list',
  templateUrl: './time-log-list.component.html',
  styleUrls: ['./time-log-list.component.css']
})
export class TimeLogListComponent implements OnInit {

  logList: any;
  abc: any;
  deleteResponse: any;
  constructor(private _timeLogService: TimeLogService, private _route: Router, private _http: HttpClient) { }

  ngOnInit(): void {
  }

  getLogList() {
    this.logList = this._timeLogService.getAllTimeLogs().subscribe(data => {
      this.logList = data;
      console.log(this.logList);
    })
  }

  getName(value) {
    
  }

  editLog(value) {
    this._timeLogService.editTimeLogData = value;
    this._route.navigate(['editLog']);

  }

  deleteLog(value) {
    console.log(value);
    this._timeLogService.deleteLog(value.timeLogId).subscribe(data =>
      {
        this.deleteResponse = data;
        alert("Log Deleted");
        location.reload();
      })
  }
}
