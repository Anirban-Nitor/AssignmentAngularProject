import { Component, OnInit } from '@angular/core';
import { TimeLogListComponent } from '../time-log-list/time-log-list.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeLogService } from 'src/app/time-log.service';

@Component({
  selector: 'app-edit-time-log',
  templateUrl: './edit-time-log.component.html',
  styleUrls: ['./edit-time-log.component.css']
})
export class EditTimeLogComponent implements OnInit {

  editResponse: any;
  constructor(private _timeLogService: TimeLogService, private _route: Router, private Fb: FormBuilder) {}

    public editLogServiceData = this._timeLogService.editTimeLogData;


   editLogFormData = this.Fb.group({
    TimeLogId: [this.editLogServiceData.timeLogId],
    projectName: [this.editLogServiceData.projectName],
    email: [this.editLogServiceData.email],
    date: [this.editLogServiceData.date,[Validators.required]],
    time: [this.editLogServiceData.time,[Validators.required]],
    comment: [this.editLogServiceData.comment,[Validators.required]]
  })

  ngOnInit(): void {
  }

  onUpdateLog() {
    this._timeLogService.editLog(this.editLogServiceData.timeLogId, this.editLogFormData.value).subscribe(data => {
      this.editResponse = data;
      this._route.navigate(['logList']);
    })
  }

}
