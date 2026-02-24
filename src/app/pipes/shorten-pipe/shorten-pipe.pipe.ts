import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPipe'
})
export class ShortenPipePipe implements PipeTransform {

  transform(value: any, limit:any) {
    return value.substring(0, limit) + '...';
  }

}
