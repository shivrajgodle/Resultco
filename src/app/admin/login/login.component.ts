import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {Router} from '@angular/router'
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

  // constructor(private router:Router,private _snackBar: MatSnackBar) { }

  constructor(private router:Router){}
  ngOnInit() {
  }

  onLogin()
  {


    console.log(this.LoginPage)
    console.log();

    // console.log(this.collection)

    // let abc =this.LoginPage.value;

    if(this.LoginPage.admin_id === "admin" && this.LoginPage.password==="admin123")
    {
      this.router.navigateByUrl('admin/homepage');
    }
    else{
      alert('wrong details')
    }

  }
}

