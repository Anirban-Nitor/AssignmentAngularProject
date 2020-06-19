import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TimeLogService } from '../time-log.service';
import { AccountService } from '../account.service';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-logs',
  templateUrl: './time-logs.component.html',
  styleUrls: ['./time-logs.component.css']
})
export class TimeLogsComponent implements OnInit {

  addTimeLogResponse: any;
  addTimeLog: any;
  project: any;
  constructor(private Fb: FormBuilder, private _timeLogService: TimeLogService, private _route: Router,
              private _account: AccountService, private _projectService: ProjectService) {

    var CurrentUser = this._account.getCurrentUser();            
    var email = CurrentUser.email;
    this._projectService.getProject(CurrentUser.projectId).subscribe(data => {
      this.project = data;

      this.addTimeLog = this.Fb.group({
        ProjectName: [this.project.projectName, [Validators.required]],
        Date: ['',[Validators.required]],
        Time: ['',[Validators.required]],
        Comment: ['',[Validators.required]],
        Email: [email, [Validators.required]],
      })
    });
   }

  ngOnInit() {
  }

  

  AddTimeLog() {
    console.log(this.addTimeLog.value);
    this._timeLogService.addTimeLog(this.addTimeLog.value)
                        .subscribe(data => {
                          this.addTimeLogResponse = data;
    console.log(this.addTimeLogResponse);
    this._route.navigate(['logList']);
    });
    
  }

}
