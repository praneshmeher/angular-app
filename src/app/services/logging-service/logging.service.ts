import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatus(status:any){
    console.log('logging service', status)
  }

}
