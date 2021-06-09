import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { AdminModule } from './admin/admin.module';

import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import {TokenInterceptorService} from './token-interceptor.service'
import { AuthGuard } from './auth.guard';


// import {MultiplierPipe} from './multiplier.pipe'


@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    AdminModule,
    HttpClientModule


  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
