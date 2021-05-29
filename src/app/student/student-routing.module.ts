import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultPageComponent } from './result-page/result-page.component';
import {ResultComponent} from './result/result.component'
const routes: Routes = [
  {path:"result",component:ResultComponent},
  {path:"resultpage",component:ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }

