import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ResultServiceService } from './result-service.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:ResultServiceService,private router:Router){}

  canActivate():boolean{
      if(this.service.getToken()){
        return true;
      }
      else{
        this.router.navigate(['admin/login'])
        return false;
      }

  }

}
