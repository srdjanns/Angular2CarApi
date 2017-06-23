import {Component} from "@angular/core";
import {Car} from "../models/car";
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'car',
  templateUrl: './cars.component.html'
})

export class CarsComponent {
  cars: Car[];

constructor(private CarsService: CarsService) {
  this.getCars();
}

getCars() {
  this.CarsService.getCars().subscribe((data) => {

    this.cars = data;
    }, (err) => {
      console.log("Error while getting Cars");
    });
  }
}
