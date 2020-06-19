import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projectList: any;
  public project: any;
  constructor(private _projectService: ProjectService, private _route: Router) { }

  ngOnInit(): void {
  }

  getProjectList() {
    this._projectService.getProjectList().subscribe(data => {
      this.projectList = data;
      console.log(this.projectList);
    });
  }

  editProject(item) {
    this._projectService.EditProjectData = item;
    this._route.navigate(['editproject'])
  }

  deleteProject(item) {
    this._projectService.deleteProject(item.projectId).subscribe(data => {
      this.project = data;
    this.getProjectList();
    });
  }

}
