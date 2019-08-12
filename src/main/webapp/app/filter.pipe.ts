import { FormControlName } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { forEach } from '@angular/router/src/utils/collection';
import { Pipe, PipeTransform } from '@angular/core';
import { Student } from './student';
@Pipe({
  name: 'searchByName'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args));
      return rVal;
    })

} 
  }
