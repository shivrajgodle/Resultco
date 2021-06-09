import { Component, OnInit, OnDestroy } from '@angular/core';
import {MediaObserver,MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {


  mediaSub!:Subscription;
  deviceXs!:boolean;
  constructor(public MediaObserver:MediaObserver) { }

  ngOnInit(): void {

   this.mediaSub = this.MediaObserver.media$.subscribe((result:MediaChange)=>{
    console.log(result.mqAlias)

    this.deviceXs = result.mqAlias === 'xs' ? true:false

    })

  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}
