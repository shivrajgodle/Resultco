import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class ResultServiceService {

  // url="http://localhost:3000/students"
  // url1="http://localhost:3000/Results"

  newUrl = "http://localhost:3000/students";
  newUrl1 = "http://localhost:3000/Results";
  authUrl = "http://localhost:3000";

  constructor(private http:HttpClient, private cookie:CookieService) { }

  getRegisteredStudents(){
    // console.log("hello i am from service...")
   return this.http.get(this.newUrl)
  }

  sendStudData(data: any){
    // console.warn("service",data)

  return this.http.post(this.newUrl,data)
  }

  sendStudResult(data: any){
    // console.log("service",data)
    return this.http.post(this.newUrl1,data)
  }


  // getResult(rollnum:any):Observable<any>{
  //   const resurl="http://localhost:3000/Results?q="+rollnum;

  //  return this.http.get<any>(resurl)
  // }

  getMarks(rollnum: string):Observable<any>{

    const resurl="http://localhost:3000/Results?q="+rollnum;

   return this.http.get<any>(resurl)
  }

// userAuthentication(adminId:any,password:any){
//   console.log(password)
//   var data = "email:"+adminId+",password:"+password;
//   var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
//    console.log(password)
//  let token =  this.http.post(this.authUrl+'/auth/login',data,{headers:reqHeader})

//   console.log("token is:",token)
//   return token;

// }


getToken(){
  return !!this.cookie.get('token')
}


getInterceptToken(){
  return this.cookie.get('token')
}

deleteRms(id: any){

  return this.http.delete(`${this.newUrl}/${id}`)

}
getcurrentRms(id: any)
  {
    return this.http.get(`${this.newUrl}/${id}`)
  }

  updateRms(id: any,data: any)
  {
    return this.http.put(`${this.newUrl}/${id}`,data)
  }


}
