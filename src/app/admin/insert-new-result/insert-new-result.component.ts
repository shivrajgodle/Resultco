import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {ResultServiceService} from '../../result-service.service'

@Component({
  selector: 'app-insert-new-result',
  templateUrl: './insert-new-result.component.html',
  styleUrls: ['./insert-new-result.component.css']
})
export class InsertNewResultComponent implements OnInit {

  insResult = new FormGroup({
    roll_no:new FormControl(''),
    physics:new FormControl(''),
    chemistry:new FormControl(''),
    maths:new FormControl(''),
    electrical:new FormControl(''),
    electronics:new FormControl(''),
    chemlab:new FormControl(''),
    physicslab:new FormControl('')

  })


  constructor(private service:ResultServiceService) { }

  ngOnInit(): void {
  }


  onInsResult(){
    // console.log(this.insResult.value)
    this.service.sendStudResult(this.insResult.value).subscribe((result)=>{
      console.log("result is",result)
    })
  }

}
