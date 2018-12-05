import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reworse'
})
export class ReworsePipe implements PipeTransform {

  transform(value: any): any {
    let splitString = value.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
  }

}
