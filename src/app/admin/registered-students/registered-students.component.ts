import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ResultServiceService} from '../../result-service.service'
import {MatTableDataSource} from '@angular/material/table'
import {Studentdata} from 'src/studentData';




@Component({
  selector: 'app-registered-students',
  templateUrl: './registered-students.component.html',
  styleUrls: ['./registered-students.component.css']
})

export class RegisteredStudentsComponent implements OnInit {

  // table realted data2

  // table realted data2
  ELEMENT_DATA: Studentdata[] = [];

displayedColumns: string[] = ['Course_Name','Branch_Name','Roll_no', 'Student_Name', 'Father_Name', 'Gender'];
dataSource = new MatTableDataSource<Studentdata>(this.ELEMENT_DATA);

// table realted data2

  constructor(private rss:ResultServiceService) { }

  ngOnInit(): void {
    this.getStudentdata();
  }

  public getStudentdata()
  {
    let resp = this.rss.getRegisteredStudents();
    resp.subscribe(channeldata=>this.dataSource.data=channeldata as Studentdata[])

  }


}
