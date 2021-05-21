import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridgeRoutingModule } from './bridge-routing.module';
import { HomeComponent } from './home/home.component';
import {AdminModule} from '../admin/admin.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BridgeRoutingModule,
    AdminModule
  ]
})
export class BridgeModule { }
