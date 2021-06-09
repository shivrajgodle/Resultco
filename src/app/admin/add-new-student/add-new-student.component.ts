import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {ResultServiceService} from '../../result-service.service'
import Swal from 'sweetalert2'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css'],

})

export class AddNewStudentComponent implements OnInit {

  alert:boolean=false
  title:String = "Add New Student"

  addNewStud = new FormGroup({
    course_name:new FormControl(''),
    branch_name:new FormControl(''),
    roll_no:new FormControl(''),
    student_name:new FormControl(''),
    father_name:new FormControl(''),
    gender:new FormControl('')

  })


  res: any = {};
  constructor(private router:ActivatedRoute,private rms:ResultServiceService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)

    this.rms.getcurrentRms(this.router.snapshot.params.id).subscribe((result)=>{

      this.title = "Update Student"
      console.warn("result",result)
      this.res = result

      this.addNewStud = new FormGroup({
        course_name: new FormControl(this.res['course_name']),
        branch_name: new FormControl(this.res['branch_name']),
        roll_no: new FormControl(this.res['roll_no']),
        student_name: new FormControl(this.res['student_name']),
        father_name: new FormControl(this.res['father_name']),
        gender: new FormControl(this.res['gender'])

      })



    })



  }

  onAddNewStud(event: any)
  {

    if( event.submitter.name == "save" ){

      this.rms.sendStudData(this.addNewStud.value).subscribe((result)=>{
        console.log("result is",result);
      })
      // console.log(this.addNewStud.value)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your data has been added successfully!!!',
        showConfirmButton: false,
        timer: 1500
      })

      this.clearForm()

    }

    else if( event.submitter.name == "update"){

      console.warn(this.addNewStud.value)
      this.rms.updateRms(this.router.snapshot.params.id,this.addNewStud.value).subscribe((result)=>{
    // console.warn(result)

      this.alert=true
      })


      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your data has been successfully updated!!!',
        showConfirmButton: false,
        timer: 1500
      })

      this.clearForm()

    }


  }


closeAlert()
{
  this.alert=false
}



clearForm(){

  this.addNewStud.reset({

    "course_name": "",
    "branch_name": "",
    "roll_no": '',
    "student_name": "",
    "father_name": "",
    "gender": "",


  })

}

}
