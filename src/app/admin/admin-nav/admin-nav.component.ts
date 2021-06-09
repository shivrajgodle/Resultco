import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs'

import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit, OnDestroy  {



  mediaSub!:Subscription;
  deviceXs!:boolean;
  constructor(private cookie:CookieService,private router:Router,public MediaObserver:MediaObserver) { }

  ngOnInit(): void {

   this.mediaSub = this.MediaObserver.media$.subscribe((result:MediaChange)=>{
    console.log(result.mqAlias)

    this.deviceXs = result.mqAlias === 'xs' ? true:false

    })

  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

  onAddnewstude(){
    Swal.fire({
      title: 'Do You Want To Add New Student???',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })

  }

  onRegistredstud(){
    Swal.fire({
      title: 'All Students',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  onAddnewres(){
    Swal.fire({
      title: 'Do You Want To Add New Student Results???',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

  onLogout(){
    this.cookie.delete('token')
    this.router.navigate(['/'])

  }



  }





