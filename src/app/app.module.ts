import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { ProjectComponent } from './project/project.component';
import { ProjectService } from './project.service';
import { RouterModule } from '@angular/router';
import { AddProjectFormComponent } from './project/add-project-form/add-project-form.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { TimeLogsComponent } from './time-logs/time-logs.component';
import { TimeLogService } from './time-log.service';
import { TimeLogListComponent } from './time-logs/time-log-list/time-log-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { EditTimeLogComponent } from './time-logs/edit-time-log/edit-time-log.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectComponent,
    AddProjectFormComponent,
    ProjectDetailsComponent,
    EditProjectComponent,
    TimeLogsComponent,
    TimeLogListComponent,
    RegistrationComponent,
    HomeComponent,
    UserComponent,
    AssignProjectComponent,
    EditUserComponent,
    EditTimeLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AccountService, ProjectService, TimeLogService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
