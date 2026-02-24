import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  postData(config:any){
    this.http.post("https://reqres.in/api/users",config,
    {
      observe:'response',
      headers:new HttpHeaders({'custom-header':'value'})
    })
    .pipe(
      map((data:any)=>{
        return {...data, name : 'Pranesh'} 
      }),
      catchError((error)=>{
        return throwError(error)
      })
    )
    .subscribe((data)=>{
      console.log(data)
    })
  }

  getData(){
    return this.http.get("https://reqres.in/api/users?page=2",{
      observe:'response',
      responseType:'text'
    })
  }

}
