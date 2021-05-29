import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {ResultServiceService} from './result-service.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req:any , next:any){
    let resultService = this.injector.get(ResultServiceService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${resultService.getInterceptToken()}`
      }
    })
    return next.handle(tokenizedReq)

  }
}
