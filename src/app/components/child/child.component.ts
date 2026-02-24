import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parent-data') data:Array<any> = []
  @Output() childEvent = new EventEmitter<any>()
  @ContentChild('parentelementref') contentref:any
  @ViewChild('myinput') myinput!:ElementRef;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.data=this.dataService.data
    this.dataService.dataUpdated.subscribe((data)=>{
      console.log(data)
    })
    this.dataService.subject.subscribe((data)=>{
      console.log(data)
    })
  }

  childClick(){
    console.log("Value of input: " + this.myinput.nativeElement.value)
    this.childEvent.emit('child data');
  }

  ngAfterContentChecked(){
    console.log(this.contentref)
  }

}
