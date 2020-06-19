import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { Projects } from 'src/app/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.css']
})
export class AddProjectFormComponent implements OnInit {

  public addProjectResponse: Projects;
  constructor(private Fb: FormBuilder, private _projectService: ProjectService, private _route: Router) { }

  ngOnInit(): void {
  }

  addProject = this.Fb.group({
    projectName: ['', [Validators.required]],
    projectType: ['', [Validators.required]],
    projectTechnology: ['', [Validators.required]],
    projectDetails: ['', [Validators.required]]
  });

  onAddProject() {
    this._projectService.addProject(this.addProject.value).subscribe(data => {
      this.addProjectResponse = data;
      alert(this.addProjectResponse.projectName + "Added");

      this._route.navigate(['/projectList'])
    })
    
  }

}
