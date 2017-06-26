import {Component} from "@angular/core";
import {Car} from "../models/car";
import {Cars} from "../models/cars";
import {CarsService} from "../services/cars.service";
import {FilterPipe} from '../filter.pipe';

@Component({
  moduleId: module.id,
  selector: 'car',
  templateUrl: 'cars.component.html',
  providers: [CarsService],
})

export class CarsComponent {
  cars: Car[];
  selectedCar: string;

constructor(private CarsService: CarsService) {
  this.getCars();
}

  getCars() {
    this.CarsService.getCars().subscribe((data) => {
      this.cars = data.data;
      }, (err) => {
        console.log("Error while getting Cars");
      });
      console.log(this.cars);
  }
}
