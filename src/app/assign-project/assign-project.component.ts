import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FormArrayName, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {

  userToBeAssigned : any;
  assignProject: any;
  projectList: any;
  assignProjectReaponse: any;

  constructor(private _projectService: ProjectService, private Fb: FormBuilder,private _route: Router) {
      this.userToBeAssigned = this._projectService.UserTobeAssigned;

      this._projectService.getProjectList().subscribe(data => { this.projectList = data;
      });
      

      this.assignProject = this.Fb.group({
        userId:[this.userToBeAssigned.userId],
        Email: [this.userToBeAssigned.email, [Validators.required]],
        ProjectName: ['', [Validators.required]],
      });
   }

  ngOnInit(): void {
  }

  onAddProject() {
    this._projectService.assignProjectToUser(this.assignProject.value)
                        .subscribe(data => {
                        this.assignProjectReaponse = data;
                        });
    this._route.navigate(["userList"]);
  }

  
}
