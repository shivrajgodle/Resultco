import { MultiplierPipe } from './../multiplier.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ResultComponent } from './result/result.component';
import {MaterialModule} from '../material/material.module'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ResultComponent,
    MultiplierPipe
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    MatSnackBarModule,
    MatIconModule
   
  ]
})
export class StudentModule { }
