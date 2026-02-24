import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  subject = new Subject();
  data:Array<any>=[]
  dataUpdated= new EventEmitter()
  constructor() { }

}
