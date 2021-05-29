import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  constructor(private cookie:CookieService,private router:Router) { }

  ngOnInit(): void {
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





