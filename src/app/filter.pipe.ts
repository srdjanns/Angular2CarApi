import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './models/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: Car[], term: any): any {
    if (term === undefined) return cars;
    return cars.filter(function(car){
      return car.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
