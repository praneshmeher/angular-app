import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterValue:any):any {
    console.log(value, filterValue)
    if(Array.isArray(value) && value.length)
      return value.filter((item)=>item.includes(filterValue))
  }

}
