import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project.component';
import { AddProjectFormComponent } from './project/add-project-form/add-project-form.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { TimeLogsComponent } from './time-logs/time-logs.component';
import { TimeLogListComponent } from './time-logs/time-log-list/time-log-list.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditTimeLogComponent } from './time-logs/edit-time-log/edit-time-log.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path:'login', component: LoginComponent},
  { path: 'userList', component: UserComponent},
  { path: 'editUser', component: EditUserComponent},
  { path: 'projectList', component: ProjectComponent},
  { path: 'addproject', component: AddProjectFormComponent},
  { path: 'editproject', component: EditProjectComponent},
  { path: 'addtimeLog', component: TimeLogsComponent},
  { path: 'logList', component: TimeLogListComponent},
  { path: 'editLog', component: EditTimeLogComponent},
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'assignProject', component: AssignProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
