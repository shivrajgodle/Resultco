import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {Router} from '@angular/router'
import Swal from 'sweetalert2'
import {ResultServiceService} from '../../result-service.service'
import {HttpErrorResponse} from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';

// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  LoginPage :any={
admin_id : '',
password : ''

  }

isLoginerr:boolean = false

  constructor(private router:Router,private loginservice:ResultServiceService,private cookie:CookieService){}
  ngOnInit() {
  }


  onLogin(adminId:any,password:any)
  {
    if(adminId==='admin' && password==='admin123')
    {
      this.cookie.set('token',adminId);

      this.router.navigateByUrl('admin/homepage');

    }
    else{

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'incorrect ID or PASSWORD',
        showConfirmButton: false,
        timer: 1500
      })

    }

    // console.log(adminId)


    // this.loginservice.userAuthentication(adminId,password).subscribe((data:any)=>{

    //   // if(data.success)
    //   // {
    //   //   console.log(data);
    //   //   alert(result.mess)
    //   // }

    //   localStorage.setItem('userToken',data.access_token);
    //   // console.log(data.access_token)
    //   this.router.navigate(['admin/homepage']);
    // },
    // (err:HttpErrorResponse)=>{

    //   this.isLoginerr = true;

    // })

  }



  // other code...


    // if(this.LoginPage.admin_id === "admin" && this.LoginPage.password==="admin123")
    // {

    //   const Toast = Swal.mixin({
    //     toast: true,
    //     position: 'center',
    //     showConfirmButton: false,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: (toast) => {
    //       toast.addEventListener('mouseenter', Swal.stopTimer)
    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
    //     }
    //   })

    //   Toast.fire({
    //     icon: 'success',
    //     title: 'Signed in successfully'
    //   })

    //   this.router.navigateByUrl('admin/homepage');
    // }
    // else{

      // Swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'incorrect ID or PASSWORD',
      //   showConfirmButton: false,
      //   timer: 1500
      // })

    // }




}

