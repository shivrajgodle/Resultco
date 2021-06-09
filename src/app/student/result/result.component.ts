
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {Router} from '@angular/router'
import {ResultServiceService} from "../../result-service.service"
import Swal from 'sweetalert2'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  messege = "hi i am from result page"

  // resultPage = new FormGroup({
  //   roll_no:new FormControl('')

  // })

  resultPage:any={
    roll_no:''

  }

  rollnum:any


  constructor(private router1:Router,private servo1:ResultServiceService) { }

  collection:any=[];

  ngOnInit(): void {

    // this.servo1.getMarks("9689").subscribe((data)=>{
    //   console.log(data)
    // })




  }





  onGetResult(){

// let item1:any={} = this.collection;

// for(let ck of item1){

//   if( ck.roll_no === this.resultPage.roll_no)
//   {
//     console.log("marsheet is generating")

//   }
//   else
//   {
//     console.log("sorry there is no marksheet")

//   }
// }


    this.servo1.getMarks(this.resultPage.roll_no).subscribe((data)=>{


    //   try {
    //     console.log(data)
    //     this.collection = (data);
    // } catch (error) {
    //     alert('data is not available');
    // }

      console.log(data)

      this.collection = data

      if(!this.collection.length)
      {

        const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
              }
            })

            Toast.fire({
              icon: 'error',
              title: 'incorect Roll Number'
            })
      }
      else
      {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your marksheet has been generated successfully!!!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })







 }



//  -----------------print result------------------

// name = 'Angular ' + VERSION.major;

  printPage() {
    window.print();
  }


}
