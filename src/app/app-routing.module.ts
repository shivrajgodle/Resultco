import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminModule} from './admin/admin.module'
import {StudentModule} from './student/student.module'
import {NavbarComponent} from './navbar/navbar.component';
import {MainhomeComponent} from './mainhome/mainhome.component';
import {BridgeModule} from './bridge/bridge.module';
import {HomeComponent} from './bridge/home/home.component'
const routes: Routes = [
  {path:'',pathMatch:"full",component:MainhomeComponent},
  {path:'admin',loadChildren:()=>AdminModule},
  {path:'student',loadChildren:()=>StudentModule},
  {path:'navbar',component:NavbarComponent},
  {path:'mainhome',component:MainhomeComponent},
  {path:'bridge',loadChildren:()=>BridgeModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
