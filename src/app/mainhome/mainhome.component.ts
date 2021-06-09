import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  hireme(){
    // Swal.fire({
    //   title: 'Custom width, padding, background.',
    //   width: 300,
    //   padding: '3em',
    //   background: '#fff url(/images/trees.png)',
    //   backdrop: `
    //     rgba(0,0,123,0.4)
    //     url("/images/nyan-cat.gif")
    //     left top
    //     no-repeat
    //   `
    // })
  }

}
