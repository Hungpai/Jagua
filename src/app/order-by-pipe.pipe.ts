import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipePipe implements PipeTransform {

  transform(array: any[], field: string): any[] {
    if(!Array.isArray(array)) {
      return [];
    }
    return array.sort((a,b) => (a[field] > b[field] ? 1 : -1));
  }

}
