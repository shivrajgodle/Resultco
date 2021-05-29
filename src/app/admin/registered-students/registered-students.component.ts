import { HttpClient } from '@angular/common/http';
import {AfterViewInit,Component, OnInit, ViewChild } from '@angular/core';
import {ResultServiceService} from '../../result-service.service'
import {MatTableDataSource} from '@angular/material/table'
import {Studentdata} from 'src/studentData';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
// import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-registered-students',
  templateUrl: './registered-students.component.html',
  styleUrls: ['./registered-students.component.css']
})

export class RegisteredStudentsComponent implements OnInit, AfterViewInit {



  // table realted data2

  // table realted data2
  ELEMENT_DATA: Studentdata[] = [];

displayedColumns: string[] = ['id','Course_Name','Branch_Name','Roll_no', 'Student_Name', 'Father_Name', 'Gender','actions'];
dataSource = new MatTableDataSource<Studentdata>(this.ELEMENT_DATA);

//paginator



// table realted data2

@ViewChild(MatPaginator)
 paginator!: MatPaginator;

//  @ViewChild(MatSort)
//   sort!: MatSort;


  constructor(private rss:ResultServiceService,private router:Router) { }

  ngOnInit() {

    this.getStudentdata();
    // this.dataSource.sort = this.sort;

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  public getStudentdata()
  {
    let resp = this.rss.getRegisteredStudents();
    resp.subscribe(channeldata=>this.dataSource.data=channeldata as Studentdata[])

  }


  onEdit(row: any){
    console.log(row)

  }

  deleteRms(item:any){



    Swal.fire({
      title: 'Do you want to delete this row?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `YES`,
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        //delete logic

    this.rss.deleteRms(item).subscribe((result)=>{
      console.warn("item deleted",result)
      this.ngOnInit();
    })

        Swal.fire('Row deleted Succesfully!', '', 'success')




      } else if (result.isDenied) {
        Swal.fire('row is not deleted', '', 'info')
      }
    })

  }



}
