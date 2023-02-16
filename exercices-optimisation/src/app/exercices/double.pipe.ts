import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double',
  // pure: false,
})
export class DoublePipe implements PipeTransform {

  transform(nb: string | number): number {
    console.log('double pipe called');
    return Number(nb) * 2;
  }

}
