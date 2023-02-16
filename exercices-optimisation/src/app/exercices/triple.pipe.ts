import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'triple'
})
export class TriplePipe implements PipeTransform {

  transform(nb: string | number): number {
    console.log('triple pipe called');
    return Number(nb) * 3;
  }

}
