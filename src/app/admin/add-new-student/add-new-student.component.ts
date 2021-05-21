import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {ResultServiceService} from '../../result-service.service'
@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css'],

})

export class AddNewStudentComponent implements OnInit {


  addNewStud = new FormGroup({
    course_name:new FormControl(''),
    branch_name:new FormControl(''),
    roll_no:new FormControl(''),
    student_name:new FormControl(''),
    father_name:new FormControl(''),
    gender:new FormControl('')

  })


  constructor(private service:ResultServiceService) { }

  ngOnInit(): void {
  }

  onAddNewStud()
  {
    this.service.sendStudData(this.addNewStud.value).subscribe((result)=>{
      console.log("result is",result);
    })
    // console.log(this.addNewStud.value)
  }

}
