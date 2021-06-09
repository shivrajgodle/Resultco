import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BridgeRoutingModule } from './bridge-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BridgeRoutingModule
  ]
})
export class BridgeModule { }
