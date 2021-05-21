import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewStudentComponent} from './add-new-student/add-new-student.component'
import {LoginComponent} from './login/login.component'
import {InsertNewResultComponent} from './insert-new-result/insert-new-result.component'
import {HomepageComponent} from './homepage/homepage.component'
import {RegisteredStudentsComponent} from './registered-students/registered-students.component'
import { AdminNavComponent } from './admin-nav/admin-nav.component';

const routes: Routes = [
  {path:'add-new-student',component:AddNewStudentComponent},
  {path:'login',component:LoginComponent},
  {path:'insert-new-result',component:InsertNewResultComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'registered-students',component:RegisteredStudentsComponent},
  {path:'adminnav',component:AdminNavComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
