import {Component} from "@angular/core";
import {Car} from "../models/car";
import {CarsService} from "../services/cars.service";

@Component({
  moduleId: module.id,
  selector: 'car',
  templateUrl: 'cars.component.html',
  providers: [CarsService]
})

export class CarsComponent {
  cars: Car[];

constructor(private CarsService: CarsService) {

}

getCars() {
  console.log("Dje si");

  this.CarsService.getCars().subscribe((data) => {
    this.cars = data;
    }, (err) => {
      console.log("Error while getting Cars");
    });
    console.log(this.cars);
  }
}
