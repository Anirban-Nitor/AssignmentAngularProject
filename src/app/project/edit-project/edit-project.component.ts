import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  putResponse: any;
  public editData = this._projectService.EditProjectData;

  constructor(private _http: HttpClient, private Fb: FormBuilder,
              private _projectService: ProjectService, private _route: Router) {

  }

  ngOnInit() {
    
  }

  editProject = this.Fb.group({
    projectId: [this.editData.projectId],
    projectName: [this.editData.projectName, [Validators.required]],
    projectType: [this.editData.projectType, [Validators.required]],
    projectTechnology: [this.editData.projectTechnology, [Validators.required]],
    projectDetails: [this.editData.projectDetails]
  });

  onUpdateProject() {
    this._projectService.editProject(this.editProject.value.projectId,this.editProject.value)
                        .subscribe(data => {
                          this.putResponse = data;
                          console.log(this.putResponse);
                        });
    this._route.navigate(['projectList']);
  }
}
