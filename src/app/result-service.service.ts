import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  url="http://localhost:3000/students"
  url1="http://localhost:3000/Results"
  constructor(private http:HttpClient) { }

  getRegisteredStudents(){
    // console.log("hello i am from service...")
   return this.http.get(this.url)
  }

  sendStudData(data: any){
    // console.warn("service",data)

  return this.http.post(this.url,data)
  }

  sendStudResult(data: any){
    // console.log("service",data)
    return this.http.post(this.url1,data)
  }



}
