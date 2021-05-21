import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';
import { InsertNewResultComponent } from './insert-new-result/insert-new-result.component';
import { MaterialModule } from '../material/material.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { HomepageComponent } from './homepage/homepage.component';
import {NavbarComponent} from '../navbar/navbar.component';
import { RegisteredStudentsComponent } from './registered-students/registered-students.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
@NgModule({
  declarations: [
    LoginComponent,
    AddNewStudentComponent,
    InsertNewResultComponent,
    HomepageComponent,
    NavbarComponent,
    RegisteredStudentsComponent,
    AdminNavComponent
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatSnackBarModule,
    MatIconModule
  ],
  exports:[NavbarComponent]
})
export class AdminModule { }
