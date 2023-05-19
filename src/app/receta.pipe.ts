import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receta'
})
export class RecetaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
