import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reworse'
})
export class ReworsePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

}
