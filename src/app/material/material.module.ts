import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
const MaterialComponents =[
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatMenuModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatIconModule,
  MatToolbarModule,
  FormsModule,
  MatTableModule
]

@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
