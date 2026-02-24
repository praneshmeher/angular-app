import { Component, ElementRef, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { DataService } from '../../services/data-service/data.service';
import { LoggingService } from '../../services/logging-service/logging.service';
import { HttpServiceService } from '../../services/http-service/http-service.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  list:any = [];
  name='Pranesh'
  date = new Date().toISOString()
  disableClick = true
  value=3
  title = 'my-angular-app';
  filterValue=''
  valueInComponent = ''
  data = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve('async data')
      }, 2000)
  })

  constructor(
    private elementRef:ElementRef,
    private dataService:DataService,
    private loggingService:LoggingService,
    private http:HttpServiceService
  ) { }

  ngOnInit(): void {

    // called once the component is initialized
    console.log('ngOnInit called')
    this.list = ['Pranesh', 'Ganesh'];
    this.elementRef.nativeElement.style.color = 'red'
    this.loggingService.logStatus('playground component initialized')

    const customObservable = Observable.create((observer:any)=>{
      observer.next('1')
      observer.next('2')
      observer.next('3')
      observer.complete()
      observer.error(new Error())
    })

    customObservable.pipe(
      map((data)=>{
        return 'map ' + data
      }),
      filter((data)=>{
        return data!=='map 2'
      })
    )
    .subscribe((data:any)=>{
      console.log(data)
    },(error:any)=>{
      console.log(error)
    },()=>{
      console.log('complete')
    })

    this.http.postData({
      "name": "morpheus",
      "job": "leader"
    })

    this.http.getData().subscribe((data)=>{
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  
  }

  ngOnChanges(changes:SimpleChanges){
    // called after a bound input property changes
    // @Input()
    console.log('ngOnChanges called', changes)
  }

  ngDoCheck(){
    // called during every change detection run
    // events proprty 
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(){
    // called after content has been projected into view 
    // ng-content
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    // called every time the projected content has been checked
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(){
    // called after component's view has been initialized
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(){
    // called every time the view have been checked
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    // called once the component is about to be destroyed
    console.log('ngOnDestroy called')
  }

  onClick(event:any){
    console.log('clicked', event)
    this.dataService.data.push('new data')
    this.dataService.dataUpdated.emit('event data')
    this.dataService.subject.next('subject data')
  }

  onClickRef(value:any){
    console.log('clicked', value)
    this.valueInComponent = value
  }

  parentClick(event:any){
    console.log('parent component', event)
  }

  onKeyUp(event:Event){
    console.log('clicked', (<HTMLInputElement>event.target).value)
  }

}
